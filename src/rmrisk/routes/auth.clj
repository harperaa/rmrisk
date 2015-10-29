(ns rmrisk.routes.auth
  (:require [rmrisk.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.response :refer [response redirect content-type]]
            [ring.util.http-response :refer [ok]]))


;;(defn authenticate [username password & [attributes]]
;;  (let [server (client/connect util/host)
;;      qualified-name (str username "@" (-> "ausregistrygroup.local"))]
;;  (if (client/bind? server qualified-name password)
;;  (first (client/search server
;;                      "OU=Staff,DC=ausregistrygroup,DC=local"
;;  {:filter     (str "sAMAccountName=" username)
;; :attributes (or attributes [])})))))


(def authdata {:admin "admin" :test "test"})

(defn login-page [& [error]]
  (layout/render "login.html" {:error error}))

(defn user-auth [username password]
  (=(get authdata (keyword username)) password))

(defn handle-login [username password {session :session}]
  (if (user-auth username password)
    ( ->  (redirect "/")
          (assoc :session (assoc session :identity username)))
    (login-page "Authentication failed")))


(defn handle-logout
  [request]
  (-> (redirect "/login")
      (assoc :session {})))

(defroutes auth-routes
           (GET "/login"  [] (login-page))
           (POST "/login" [username password req] (handle-login username password req))
           (GET "/logout" [req] (handle-logout req)))
