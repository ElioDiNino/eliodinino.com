// ***********************************************************
// https://on.cypress.io/configuration
// ***********************************************************

import './commands';
import { addCompareSnapshotCommand } from 'cypress-visual-regression/dist/command';

addCompareSnapshotCommand();
