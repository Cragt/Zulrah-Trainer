// Immer must be initialized with Map and Set support before the app is imported.

import { enableMapSet } from 'immer'

enableMapSet()

import('./app').then(({ initialize }) => initialize())
