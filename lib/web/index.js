const fs = require('fs-extra')
const pathFn = require('path')
const chokidar = require('chokidar')
const { Server } = require('ws')
const StaticServer = require('./server')
const config = require('../config/')