#!/bin/bash

pkill chromium
npm run build
systemctl reboot