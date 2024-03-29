(ns lobos.config
  (:use lobos.connectivity))

(defn open-global-when-necessary
  "Open a global connection only when necessary, that is, when no previous
  connection exist or when db-spec is different to the current global
  connection"
  [db-spec]
  ;; If the connection credentials has changed, close the connection.
  (when (and (@lobos.connectivity/global-connections :default-connection)
          (not= (:db-spec (@lobos.connectivity/global-connections :default-connection)) db-spec))
    (lobos.connectivity/close-global))
  ;; Open a new connection or return the existing one.
  (if (nil? (@lobos.connectivity/global-connections :default-connection))
    (lobos.connectivity/open-global db-spec)
    (@lobos.connectivity/global-connections :default-connection)))

(def db-spec
  {:classname "org.postgresql.Driver"
   :subprotocol "postgresql"
   :user "rmrisk"
   ;:password "defailt1"
   :subname "//localhost:5432/rmrisk"})

(open-global-when-necessary db-spec)

