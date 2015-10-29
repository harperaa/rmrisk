(ns lobos.migrations
  (:refer-clojure
   :exclude [alter drop bigint boolean char double float time])
  (:use (lobos [migration :only [defmigration]]
    core schema analyzer config helpers )
        [clojure.pprint :as pprint]
        ))

;;HELPERS
;;surrogate-key [table]
;;timestamps [table] -- updated_on and created_on
;;refer-to [table ptable]
(defn destroy-database []
      (map #(drop (table %1) :cascade)
            (-> (analyze-schema) :tables keys)))

;; list of tables
;; list of columns and datatype
(defn status [arglist]
  (def table-data (-> (analyze-schema) :tables))
  (if (= (count arglist) 1)
    (pprint/pprint (-> table-data keys))
    (pprint/pprint(map #(table-data (keyword %1)) (rest arglist)))))

(defn build [] (migrate))

;;;; LOOKUP TABLES ;;;;;
(defmigration add-classification-table
  (up [] (create
          (tbl :classification
               (varchar :name 100)
               (text :description))))
  (down [] (drop (table :classification))))

(defmigration add-information_value-table
  (up [] (create
          (tbl :information_value
               (varchar :name 100)
               (text :description))))
  (down [] (drop (table :information_value))))

(defmigration add-threat_class-table
  (up [] (create
          (tbl :threat_class
               (varchar :name 100)
               (text :description))))
  (down [] (drop (table :threat_class))))

(defmigration add-department-table
  (up [] (create
          (tbl :department
               (varchar :name 100)
               (varchar :manager 100)
               (varchar :email 250))))
  (down [] (drop (table :department))))

(defmigration add-role-table
  (up [] (create
          (tbl :role
               (varchar :name 100)
               (refer-to :department :department_id))))
  (down [] (drop (table :role))))

(defmigration add-user-table
    (up [] (create
            (tbl :user
                 (varchar :fname 100)
                 (varchar :lname 100)
                 (varchar :email 250)
                 (boolean :active)
                 (refer-to :department :department_id))))
    (down [] (drop (table :user))))

(defmigration add-asset_type-table
  (up [] (create
          (tbl :asset_type
               (varchar :name 100)
               (text :description))))
  (down [] (drop (table :asset_type))))

(defmigration add-risk_type-table
  (up [] (create
          (tbl :risk_type
               (varchar :name 100)
               (text :description))))
  (down [] (drop (table :risk_type))))

(defmigration add-treatment_type-table
  (up [] (create
          (tbl :treatment_type
               (varchar :name 100)
               (text :description))))
  (down [] (drop (table :treatment_type))))

(defmigration add-measure_type-table
  (up [] (create
          (tbl :measure_type
               (varchar :name 100)
               (text :description))))
  (down [] (drop (table :measure_type))))

(defmigration add-target_type-table
  (up [] (create
          (tbl :target_type
               (varchar :name 100)
               (text :description))))
  (down [] (drop (table :target_type))))

(defmigration add-status-table
  (up [] (create
          (tbl :status
               (varchar :name 100)
               (text :description))))
  (down [] (drop (table :status))))

(defmigration add-probability-table
  (up [] (create
          (tbl :probability
               (varchar :name 100)
               (text :description))))
  (down [] (drop (table :probability))))

(defmigration add-impact-table
  (up [] (create
          (tbl :impact
               (varchar :name 100)
               (text :description))))
  (down [] (drop (table :impact))))

(defmigration add-combined_risk-table
  (up [] (create
          (tbl :combined_risk
               (varchar :name 100)
               (text :description))))
  (down [] (drop (table :combined_risk))))


;;;; PRIMARY ENTITIES ;;;;;
(defmigration add-asset-table
  (up [] (create
          (tbl :asset
            (varchar :name 100)
            (check :name (> (length :name) 1))
            (refer-to :asset_type :asset_type_id)
            (text :description)
            (refer-to :role :owner)
            (refer-to :classification :classification_id)
            (refer-to :information_value :information_value_id)
            (refer-to :status :status_id)
            (timestamp :last_reviewed)
            (refer-to :role :last_updater))))
  (down [] (drop (table :asset))))

(defmigration add-risk-table
  (up [] (create
          (tbl :risk
            (varchar :name 100)
            (check :name (> (length :name) 1))
            (refer-to :threat_class :threat_class_id)
            (refer-to :risk_type :risk_type_id)
            (text :description)
            (refer-to :role :owner_id)
            (refer-to :status :status_id)
            (timestamp :last_reviewed)
            (refer-to :role :last_updater_id))))
  (down [] (drop (table :risk))))

(defmigration add-treatment-table
  (up [] (create
          (tbl :treatment
            (varchar :name 100)
            (check :name (> (length :name) 1))
            (refer-to :treatment_type :treatment_type_id)
            (text :description)
            (refer-to :role :owner_id)
            (refer-to :status :status_id)
            (timestamp :last_reviewed)
            (refer-to :role :last_updater_id))))
  (down [] (drop (table :treatment))))

(defmigration add-measure-table
  (up [] (create
          (tbl :measure
            (varchar :name 100)
            (check :name (> (length :name) 1))
            (refer-to :measure_type :measure_type_id)
            (text :description)
            ;(refer-to :role :owner)
            (refer-to :target_type :target_type_id)
            ;; Target needs to be defined on the instatiated treatment_measure
            ;;(real :current_target)
            (timestamp :last_reviewed)
            (refer-to :role :last_updater_id))))
  (down [] (drop (table :measure))))

;;;; JOINING ENTITIES ;;;;;

(defmigration add-asset_risk-table
  (up [] (create
          (tbl :asset_risk
          ;; TODO
          ;; This table should not be using the default primary key create
          ;; PK should be a composite of reference to asset_id and risk_id
          (refer-to :asset :asset_id)
          (refer-to :risk :risk_id)
          (refer-to :probability :probability_id)
          (refer-to :impact :impact_id)
          (refer-to :combined_risk :combined_risk_id)
          ;; TODO
          ;; Residual values can actually be calculated automatic function at DB layer?
          (refer-to :probability :residual_probability_id)
          (refer-to :impact :residual_impact_id)
          (refer-to :combined_risk :residual_combined_risk_id)
          ;;(refer-to :status :status) -- this should be an application layer calculation
          (timestamp :last_reviewed)
          (text :description)
          (refer-to :role :last_updater))))
  (down [] (drop (table :asset_risk))))

(defmigration add-risk_treatment-table
  (up [] (create
          (tbl :risk_treatment
          ;; TODO
          ;; This table should not be using the default primary key create
          ;; PK should be a composite of reference to risk_id and treatment_id
          (refer-to :risk :risk_id)
          (refer-to :treatment :treatment_id)
          (text :description))))
      (down [] (drop (table :risk_treatment))))

(defmigration add-treatment_measure-table
  (up [] (create
          (tbl :treatment_measure
          ;; TODO
          ;; This table should not be using the default primary key create
          ;; PK should be a composite of reference to risk_id and treatment_id
          (refer-to :measure :measure_id)
          (refer-to :treatment :treatment_id)
          ;; Does it make sense to have the same measure with different targets? -- maybe...
          (real :current_target)
          (text :description))))
      (down [] (drop (table :treatment_measure))))