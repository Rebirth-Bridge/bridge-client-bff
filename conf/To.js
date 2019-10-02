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
  base: "http://localhost:3010",
  context: "/hs"
};

const REGAPPROVAL = {
  base: "http://localhost:3010",
  context: "/regapproval"
};

const SUPPLIER = {
  base: "http://localhost:3020",
  context: "/supplier"
};

const INCOTERM = {
  base: "http://localhost:3010",
  context: "/incoterm"
};
const BANK = {
  base: "http://localhost:3020",
  context: "/bank"
};



const TRADE_AGREEMENT = {
  base: "http://localhost:3010",
  context: "/tradeagreement"
};

const MATERIAL = {
  base: "http://localhost:3010",
  context: "/material"
};

const MATERIALTYPE = {
  base: "http://localhost:3010",
  context: "/materialtype"
};

const MESURE = {
  base: "http://localhost:3010",
  context: "/mesure"
};

const STAKEHOLDER = {
  base : "http://localhost:3010",
  context : "/stakeHolder"
}

const BLTYPE = {
  base : "http://localhost:3010",
  context : "/blType"
}

const PAYMENT_TERM = {
  base: "http://localhost:3010",
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
