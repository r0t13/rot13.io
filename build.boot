#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.5.0"

(set-env!
  :project      'rot13.io
  :version      "0.0.0-SNAPSHOT"
  :dependencies '[[tailrecursion/boot.task   "2.2.4"]
                  [tailrecursion/hoplon      "5.10.14"]
                  [tailrecursion/boot.ring   "0.2.1"]
                  [tailrecursion/boot.notify "2.0.2"]
                  ]
  :out-path     "resources/public"
  :src-paths    #{"src"})

;; Static resources (css, images, etc.):
(add-sync! (get-env :out-path) #{"assets"})

(require '[tailrecursion.hoplon.boot :refer :all])
(require '[tailrecursion.boot.task.ring :refer [dev-server]])
(require '[tailrecursion.boot.task.notify :refer [hear]])

(deftask development
  "Build rot13.io for development."
  []
  (comp (watch) (hoplon {:prerender false :pretty-print true :source-map true})))

(deftask production
  "Build rot13.io for production."
  []
  (hoplon {:optimizations :advanced
           :source-map    true
           :pretty-print  true
           }))

; vim: set ft=clojure:
