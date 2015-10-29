(ns rmrisk_lobos.core
 (:require [lobos.migrations :as migrations]
            [clojure.string :as string]
            [clojure.pprint :as pprint]
            [clojure.tools.cli :refer [parse-opts]])
  (:gen-class))

(def cli-options
  [;; First three strings describe a short-option, long-option with optional
   ;; example argument description, and a description. All three are optional
   ;; and positional.
   ;["-j" "--port PORT" "Port number"
   ; :default "status"
   ; :parse-fn #(Integer/parseInt %)
   ; :validate [#(< 0 % 0x10000) "Must be a number between 0 and 65536"]]
   ;["-H" "--hostname HOST" "Remote host"
    ;:default (InetAddress/getByName "localhost")
    ;; Specify a string to output in the default column in the options summary
    ;; if the default value's string representation is very ugly
    ;:default-desc "localhost"
    ;:parse-fn #(InetAddress/getByName %)]
   ;; If no required argument description is given, the option is assumed to
   ;; be a boolean option defaulting to nil
   ;[nil "--detach" "Detach from controlling process"]
   ;["-v" nil "Verbosity level; may be specified multiple times to increase value"
    ;; If no long-option is specified, an option :id must be given
    ;:id :verbosity
    ;:default 0
    ;; Use assoc-fn to create non-idempotent options
    ;:assoc-fn (fn [m k _] (update-in m [k] inc))]
   ["-h" "--help"]])

(defn usage [options-summary]
  (->> ["rmrisk database schema tool"
        ""
        "Usage: rmrisk-lobos [options] action"
        ""
        "Options:"
        options-summary
        ""
        "Actions:"
        "  status <tablenames> displays current schema"
        "  build        create all tables"
        "  destroy      drop all tables"
        "  rebuild      drop all tables and recreate"
        "  update       apply changes to lobos defined schema"]
       (string/join \newline)))

(defn error-msg [errors]
  (str "The following errors occurred while parsing your command:\n\n"
       (string/join \newline errors)))

(defn exit [status msg]
  (println msg)
  (System/exit status))

(defn -main [& args]
  (println (clojure.string/join ["running rmrisk db tool: ", args]))
  (let [{:keys [options arguments errors summary]} (parse-opts args cli-options)]
    ;; Handle help and error conditions
    (cond
      (:help options) (exit 0 (usage summary))
      (= (count arguments) 0) (exit 1 (usage summary))
      errors (exit 1 (error-msg errors)))
    ;; Execute program with options
    (case (first arguments)
      "status" (print (migrations/status args))
      "build" (print (migrations/build))
      "destroy" (print (migrations/destroy-database))
      "rebuild" (print ((migrations/destroy-database)(migrations/build)))
      "update" (print (migrations/build))
      (exit 1 (usage summary)))))