/**
 * Created by dinanjanag on 5/11/19.
 */

const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const AUTH = {
  base: "http://localhost:8080/auth",
  endpoints: {
    login: {path: "/login", method: [HTTP_METHODS.POST] } }
};

const API = {
  MATERIAL: 'http://localhost:3010',
  COMPANY: 'http://localhost:3020'
};

const USER = {
  base: "localhost:8080/auth",
  context: "/users",
  endpoints: {
    users: {path: "", method: [HTTP_METHODS.POST, HTTP_METHODS.PUT]},
    state: {path: "/state?active=:id", method: [HTTP_METHODS.GET]},
    activate: {path: "/activate" , method: [HTTP_METHODS.PUT]},
    admin: {path: "/admin/:id", method: [HTTP_METHODS.POST]}
  }
};

const ROLE = {
  base: "localhost:8080/auth",
  context: "/roles",
  endpoints: {
    roles: { path: "", method: [HTTP_METHODS.GET, HTTP_METHODS.POST] }
  }
};

const PAGE = {
  base: "localhost:8080/auth",
  context: "/pages",
  endpoints: {
    pages: { path: "", method: [HTTP_METHODS.GET, HTTP_METHODS.POST] },
    delete: { path: "/:id", method: [HTTP_METHODS.DELETE] }
  }
};

const HSCODE = {
  base: API.MATERIAL,
  context: "/hs"
};

const REGAPPROVAL = {
  base: API.MATERIAL,
  context: "/regapproval"
};

const SUPPLIER = {
  base: "http://localhost:3020",
  context: "/supplier"
};

const INCOTERM = {
  base: API.MATERIAL,
  context: "/incoterm"
};
const BANK = {
  base: API.COMPANY,
  context: "/bank"
};



const TRADE_AGREEMENT = {
  base: API.MATERIAL,
  context: "/tradeagreement"
};

const MATERIAL = {
  base: API.MATERIAL,
  context: "/material"
};

const MATERIALTYPE = {
  base: API.MATERIAL,
  context: "/materialtype"
};

const MESURE = {
  base: API.MATERIAL,
  context: "/mesure"
};

const STAKEHOLDER = {
  base : API.MATERIAL,
  context : "/stakeHolder"
};

const BLTYPE = {
  base : API.MATERIAL,
  context : "/blType"
}

const PAYMENT_TERM = {
  base: API.MATERIAL,
  context: "/paymentsTerm"
};



const ENDPOINTS = {
  AUTH,
  USER,
  ROLE,
  PAGE,
  HSCODE,
  REGAPPROVAL,
  SUPPLIER,
  INCOTERM,
  BANK,
  PAYMENT_TERM,
  TRADE_AGREEMENT,
  MATERIAL,
  MATERIALTYPE,
  MESURE,
  STAKEHOLDER,
  BLTYPE
};

module.exports = {
  ENDPOINTS, HTTP_METHODS
};
