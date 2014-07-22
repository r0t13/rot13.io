#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.5.0"

(set-env!
  :project      'rot13.io
  :version      "0.0.0-SNAPSHOT"
  :dependencies '[[tailrecursion/boot.task   "2.2.1"]
                  [tailrecursion/hoplon      "5.10.14"]]
  :out-path     "resources/public"
  :src-paths    #{"src"})

;; Static resources (css, images, etc.):
(add-sync! (get-env :out-path) #{"assets"})

(require '[tailrecursion.hoplon.boot :refer :all])

(deftask development
  "Build rot13.io for development."
  []
  (comp (watch) (hoplon {:prerender false :pretty-print true})))

(deftask production
  "Build rot13.io for production."
  []
  (hoplon {:optimizations :advanced}))
