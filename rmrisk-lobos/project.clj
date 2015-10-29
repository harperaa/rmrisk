(defproject rmrisk-lobos "0.1.0-SNAPSHOT"
  :description "Tool for creating rmrisk database schema"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [lobos "1.0.0-beta3"]
                 [org.clojure/tools.cli "0.3.1"]
                 [org.postgresql/postgresql "9.3-1102-jdbc41"]]
  :main rmrisk_lobos.core
  :run-aliases {:rmrisk_lobos [rmrisk_lobos.core -main "status"]})
