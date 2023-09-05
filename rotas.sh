#!/usr/bin/env bash

while getopts 'gped' OPTION; do

	
	case "$OPTION" in
		g) curl http://localhost:3333/projects;;
		p) curl -X POST -H 'Content-Type: application/json' -d '{"name": "andre"}' http://localhost:3333/projects;;
		e) curl -X PUT -H 'Content-Type: application/json' -d '{"name": "andre"}' http://localhost:3333/projects/1;;
		d) curl -X DELETE -H 'Content-Type: application/json' -d '{"name": "andre"}' http://localhost:3333/projects/1
	esac
done

