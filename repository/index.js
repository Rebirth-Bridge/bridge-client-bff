const { createRedisClient, login, makeRequest } = require('./ApiRepository');

const { getHsCodes, getHsCode, putHsCode, postHsCode } = require('./HsCodeRepository');

const { getAll, get, put, post} = require('./StakeholderRepository')


const approvalsRepo = require('./RegapprovalRepository');

const incotermRepo = require('./IncotermRepository');

const bankRepo = require('./BankRepository');

const paymenttermRepo = require('./PaymenttermRepository');

const tradeAgreementRepo = require('./TradeAgreementRepository');

const materialRepo = require('./MaterialRepository');

const materialTypeRepo = require('./MaterialTypeRepository');

const { countriesRepo } = require('./CountriesRepository');

const  mesureRepo = require('./MesureRepository');

const stakeholderRepo = require('./StakeholderRepository');

const bltypeRepo = require ('./BlTypeRepository');

const userRepo = { login };
const hscodeRepo = { getHsCodes, getHsCode, putHsCode, postHsCode };


const supplierRepo = { getAll, get, put, post};

module.exports = {
  createRedisClient,
  userRepo,
  makeRequest,
  hscodeRepo,
  countriesRepo,
  approvalsRepo,
  supplierRepo,
  incotermRepo,
  bankRepo,
  paymenttermRepo,
  tradeAgreementRepo,
  materialRepo,
  materialTypeRepo,
  mesureRepo,
  stakeholderRepo,
  bltypeRepo
};