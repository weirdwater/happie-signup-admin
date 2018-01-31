import Rebase from 're-base';
import * as config from './config'

const base = new Rebase.createClass(config.firebase);

export default base;