#!/bin/bash

file="${1}";
sizes="16 32 57 72 76 114 120 144 152 180 196";

for size in ${sizes}; do
  convert "${file}" -resize "${size}x${size}" "favicon-${size}.png";
done
