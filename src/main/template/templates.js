/* jshint ignore:start */ 
 {(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['apikey_auth'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <span class=\"key_auth__value\">"
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <input placeholder=\"api_key\" class=\"auth_input input_apiKey_entry\" name=\"apiKey\" type=\"text\"/>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"key_input_container\">\n    <h3 class=\"auth__title\">Api key authorization</h3>\n    <div class=\"auth__description\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n    <div>\n        <div class=\"key_auth__field\">\n            <span class=\"key_auth__label\">name:</span>\n            <span class=\"key_auth__value\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n        </div>\n        <div class=\"key_auth__field\">\n            <span class=\"key_auth__label\">in:</span>\n            <span class=\"key_auth__value\">"
    + alias4(((helper = (helper = helpers["in"] || (depth0 != null ? depth0["in"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"in","hash":{},"data":data}) : helper)))
    + "</span>\n        </div>\n        <div class=\"key_auth__field\">\n            <span class=\"key_auth__label\">value:</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLogout : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n";
},"useData":true});
templates['auth_button'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class='authorize__btn' href=\"#\">Authorize</a>\n";
},"useData":true});
templates['auth_button_operation'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        authorize__btn_operation_login\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        authorize__btn_operation_logout\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <ul class=\"authorize-scopes\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.scopes : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <li class=\"authorize__scope\" title=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.scope || (depth0 != null ? depth0.scope : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"scope","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"authorize__btn authorize__btn_operation\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLogout : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scopes : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
templates['auth_view'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <button type=\"button\" class=\"auth__button auth_submit__button\" data-sw-translate>Authorize</button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <button type=\"button\" class=\"auth__button auth_logout__button\" data-sw-translate>Logout</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"auth_container\">\n\n    <div class=\"auth_inner\"></div>\n    <div class=\"auth_submit\">\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.isLogout : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isAuthorized : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n</div>\n";
},"useData":true});
templates['basic_auth'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " - authorized";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <span class=\"basic_auth__value\">"
    + container.escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"username","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                <input required placeholder=\"username\" class=\"basic_auth__username auth_input\" name=\"username\" type=\"text\"/>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"auth_label\">\n                <span class=\"basic_auth__label\" data-sw-translate>password:</span>\n                <input required placeholder=\"password\" class=\"basic_auth__password auth_input\" name=\"password\" type=\"password\"/></label>\n            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class='basic_auth_container'>\n    <h3 class=\"auth__title\">Basic authentication"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLogout : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</h3>\n    <form class=\"basic_input_container\">\n        <div class=\"auth__description\">"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n        <div class=\"auth_label\">\n            <span class=\"basic_auth__label\" data-sw-translate>username:</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLogout : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.isLogout : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </form>\n</div>\n";
},"useData":true});
templates['content_type'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.produces : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "	<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <option value=\"application/json\">application/json</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<label data-sw-translate for=\""
    + alias4(((helper = (helper = helpers.contentTypeId || (depth0 != null ? depth0.contentTypeId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentTypeId","hash":{},"data":data}) : helper)))
    + "\">Response Content Type</label>\n<select name=\"contentType\" id=\""
    + alias4(((helper = (helper = helpers.contentTypeId || (depth0 != null ? depth0.contentTypeId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentTypeId","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.produces : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</select>\n";
},"useData":true});
templates['main'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=depth0 != null ? depth0 : {};

  return "  <div class=\"info_title\">"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.title : stack1), depth0))
    + "</div>\n  <div class=\"info_description markdown\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.externalDocs : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.termsOfServiceUrl : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.name : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.email : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.license : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "  <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.externalDocs : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\n  <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.externalDocs : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.externalDocs : depth0)) != null ? stack1.url : stack1), depth0))
    + "</a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"info_tos\"><a target=\"_blank\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.termsOfServiceUrl : stack1), depth0))
    + "\" data-sw-translate>Terms of service</a></div>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div><div class='info_name' style=\"display: inline\" data-sw-translate>Created by </div> "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.name : stack1), depth0))
    + "</div>";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class='info_url' data-sw-translate>See more at <a href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.url : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.url : stack1), depth0))
    + "</a></div>";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class='info_email'><a target=\"_parent\" href=\"mailto:"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.email : stack1), depth0))
    + "?subject="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" data-sw-translate>Contact the developer</a></div>";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class='info_license'><a target=\"_blank\" href='"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.license : stack1)) != null ? stack1.url : stack1), depth0))
    + "'>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.license : stack1)) != null ? stack1.name : stack1), depth0))
    + "</a></div>";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  , <span style=\"font-variant: small-caps\" data-sw-translate>api version</span>: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.version : stack1), depth0))
    + "\n    ";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <span style=\"float:right\"><a target=\"_blank\" href=\""
    + alias4(((helper = (helper = helpers.validatorUrl || (depth0 != null ? depth0.validatorUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"validatorUrl","hash":{},"data":data}) : helper)))
    + "/debug?url="
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"><img id=\"validator\" src=\""
    + alias4(((helper = (helper = helpers.validatorUrl || (depth0 != null ? depth0.validatorUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"validatorUrl","hash":{},"data":data}) : helper)))
    + "?url="
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"></a>\n    </span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class='info' id='api_info'>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.info : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<div class='container' id='resources_container'>\n  <div class='authorize-wrapper'></div>\n\n  <ul id='resources'></ul>\n\n  <div class=\"footer\">\n    <h4 style=\"color: #999\">[ <span style=\"font-variant: small-caps\">base url</span>: "
    + container.escapeExpression(((helper = (helper = helpers.basePath || (depth0 != null ? depth0.basePath : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"basePath","hash":{},"data":data}) : helper)))
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.version : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "]\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.validatorUrl : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </h4>\n    </div>\n</div>\n";
},"useData":true});
templates['oauth2'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li>\n                <input class=\"oauth-scope\" type=\"checkbox\" data-scope=\""
    + alias4(((helper = (helper = helpers.scope || (depth0 != null ? depth0.scope : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"scope","hash":{},"data":data}) : helper)))
    + "\" oauthtype=\""
    + alias4(((helper = (helper = helpers.OAuthSchemeKey || (depth0 != null ? depth0.OAuthSchemeKey : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"OAuthSchemeKey","hash":{},"data":data}) : helper)))
    + "\"/>\n                <label>"
    + alias4(((helper = (helper = helpers.scope || (depth0 != null ? depth0.scope : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"scope","hash":{},"data":data}) : helper)))
    + "</label><br/>\n                <span class=\"api-scope-desc\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.OAuthSchemeKey : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </span>\n            </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        ("
    + container.escapeExpression(((helper = (helper = helpers.OAuthSchemeKey || (depth0 != null ? depth0.OAuthSchemeKey : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"OAuthSchemeKey","hash":{},"data":data}) : helper)))
    + ")\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>\n    <h3 class=\"auth__title\">Select OAuth2.0 Scopes</h3>\n    <p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n    <p>Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes.\n        <a href=\"#\">Learn how to use</a>\n    </p>\n    <p><strong> "
    + alias4(((helper = (helper = helpers.appName || (depth0 != null ? depth0.appName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"appName","hash":{},"data":data}) : helper)))
    + " </strong> API requires the following scopes. Select which ones you want to grant to Swagger UI.</p>\n    <p>Authorization URL: "
    + alias4(((helper = (helper = helpers.authorizationUrl || (depth0 != null ? depth0.authorizationUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"authorizationUrl","hash":{},"data":data}) : helper)))
    + "</p>\n    <p>flow: "
    + alias4(((helper = (helper = helpers.flow || (depth0 != null ? depth0.flow : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flow","hash":{},"data":data}) : helper)))
    + "</p>\n    <ul class=\"api-popup-scopes\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.scopes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</div>";
},"useData":true});
templates['operation'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "deprecated";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <h4><span data-sw-translate>Warning: Deprecated</span></h4>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <h4><span data-sw-translate>Implementation Notes</span></h4>\n        <div class=\"markdown\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <div class='authorize-wrapper authorize-wrapper_operation'></div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "          <div class=\"response-class\">\n            <h4><span data-sw-translate>Response Class</span> (<span data-sw-translate>Status</span> "
    + container.escapeExpression(((helper = (helper = helpers.successCode || (depth0 != null ? depth0.successCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"successCode","hash":{},"data":data}) : helper)))
    + ")</h4>\n              "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.successDescription : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            <p><span class=\"model-signature\" /></p>\n            <br/>\n            <div class=\"response-content-type\" />\n            </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"markdown\">"
    + ((stack1 = ((helper = (helper = helpers.successDescription || (depth0 != null ? depth0.successDescription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"successDescription","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "          <h4 data-sw-translate>Headers</h4>\n          <table class=\"headers\">\n            <thead>\n              <tr>\n                <th style=\"width: 100px; max-width: 100px\" data-sw-translate>Header</th>\n                <th style=\"width: 310px; max-width: 310px\" data-sw-translate>Description</th>\n                <th style=\"width: 200px; max-width: 200px\" data-sw-translate>Type</th>\n                <th style=\"width: 320px; max-width: 320px\" data-sw-translate>Other</th>\n              </tr>\n            </thead>\n            <tbody>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.headers : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </tbody>\n          </table>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "              <tr>\n                <td>"
    + alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"key","hash":{},"data":data}) : helper)))
    + "</td>\n                <td>"
    + alias1(alias2((depth0 != null ? depth0.description : depth0), depth0))
    + "</td>\n                <td>"
    + alias1(alias2((depth0 != null ? depth0.type : depth0), depth0))
    + "</td>\n                <td>"
    + alias1(alias2((depth0 != null ? depth0.other : depth0), depth0))
    + "</td>\n              </tr>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "          <h4 data-sw-translate>Parameters</h4>\n          <table class='fullwidth parameters'>\n          <thead>\n            <tr>\n            <th style=\"width: 100px; max-width: 100px\" data-sw-translate>Parameter</th>\n            <th style=\"width: 310px; max-width: 310px\" data-sw-translate>Value</th>\n            <th style=\"width: 200px; max-width: 200px\" data-sw-translate>Description</th>\n            <th style=\"width: 100px; max-width: 100px\" data-sw-translate>Parameter Type</th>\n            <th style=\"width: 220px; max-width: 230px\" data-sw-translate>Data Type</th>\n            </tr>\n          </thead>\n          <tbody class=\"operation-params\">\n\n          </tbody>\n          </table>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "          <div style='margin:0;padding:0;display:inline'></div>\n          <h4 data-sw-translate>Response Messages</h4>\n          <table class='fullwidth response-messages'>\n            <thead>\n            <tr>\n              <th data-sw-translate>HTTP Status Code</th>\n              <th data-sw-translate>Reason</th>\n              <th data-sw-translate>Response Model</th>\n              <th data-sw-translate>Headers</th>\n            </tr>\n            </thead>\n            <tbody class=\"operation-status\">\n            </tbody>\n          </table>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "";
},"21":function(container,depth0,helpers,partials,data) {
    return "          <div class='sandbox_header'>\n            <input class='submit' type='submit' value='Try it out!' data-sw-translate/>\n            <a href='#' class='response_hider' style='display:none' data-sw-translate>Hide Response</a>\n            <span class='response_throbber' style='display:none'></span>\n          </div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "          <h4 data-sw-translate>Request Headers</h4>\n          <div class='block request_headers'></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <ul class='operations' >\n    <li class='"
    + alias4(((helper = (helper = helpers.method || (depth0 != null ? depth0.method : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"method","hash":{},"data":data}) : helper)))
    + " operation' id='"
    + alias4(((helper = (helper = helpers.parentId || (depth0 != null ? depth0.parentId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"parentId","hash":{},"data":data}) : helper)))
    + "_"
    + alias4(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data}) : helper)))
    + "'>\n      <div class='heading'>\n        <h3>\n          <span class='http_method'>\n          <a href='#!/"
    + alias4(((helper = (helper = helpers.encodedParentId || (depth0 != null ? depth0.encodedParentId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"encodedParentId","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data}) : helper)))
    + "' class=\"toggleOperation\">"
    + alias4(((helper = (helper = helpers.method || (depth0 != null ? depth0.method : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"method","hash":{},"data":data}) : helper)))
    + "</a>\n          </span>\n          <span class='path'>\n          <a href='#!/"
    + alias4(((helper = (helper = helpers.encodedParentId || (depth0 != null ? depth0.encodedParentId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"encodedParentId","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data}) : helper)))
    + "' class=\"toggleOperation "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.deprecated : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias4(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"path","hash":{},"data":data}) : helper)))
    + "</a>\n          </span>\n        </h3>\n        <ul class='options'>\n          <li>\n          <a href='#!/"
    + alias4(((helper = (helper = helpers.encodedParentId || (depth0 != null ? depth0.encodedParentId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"encodedParentId","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data}) : helper)))
    + "' class=\"toggleOperation\">"
    + ((stack1 = ((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a>\n          </li>\n        </ul>\n      </div>\n      <div class='content' id='"
    + alias4(((helper = (helper = helpers.parentId || (depth0 != null ? depth0.parentId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"parentId","hash":{},"data":data}) : helper)))
    + "_"
    + alias4(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data}) : helper)))
    + "_content' style='display:none'>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.deprecated : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.security : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.headers : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <form accept-charset='UTF-8' class='sandbox'>\n          <div style='margin:0;padding:0;display:inline'></div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.parameters : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.responseMessages : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isReadOnly : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + "        </form>\n        <div class='response' style='display:none'>\n          <h4 class='curl'>Curl</h4>\n          <div class='block curl'></div>\n          <h4 data-sw-translate>Request URL</h4>\n          <div class='block request_url'></div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showRequestHeaders : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          <h4 data-sw-translate>Response Body</h4>\n          <div class='block response_body'></div>\n          <h4 data-sw-translate>Response Code</h4>\n          <div class='block response_code'></div>\n          <h4 data-sw-translate>Response Headers</h4>\n          <div class='block response_headers'></div>\n        </div>\n      </div>\n    </li>\n  </ul>\n";
},"useData":true});
templates['param'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isFile : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<input type=\"file\" name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "' id='"
    + alias4(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueId","hash":{},"data":data}) : helper)))
    + "'/>\n			<div class=\"parameter-content-type\" />\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["default"] : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<div class=\"editor_holder\"></div>\n				<textarea class='body-textarea' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "' id='"
    + alias4(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueId","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"default","hash":{},"data":data}) : helper)))
    + "</textarea>\n        <br />\n        <div class=\"parameter-content-type\" />\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<textarea class='body-textarea' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "' id='"
    + alias4(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueId","hash":{},"data":data}) : helper)))
    + "'></textarea>\n				<div class=\"editor_holder\"></div>\n				<br />\n				<div class=\"parameter-content-type\" />\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isFile : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.renderTextParam || (depth0 && depth0.renderTextParam) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"renderTextParam","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td class='code'><label for='"
    + alias4(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueId","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</label></td>\n<td>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isBody : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "\n</td>\n<td class=\"markdown\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\n<td>"
    + ((stack1 = ((helper = (helper = helpers.paramType || (depth0 != null ? depth0.paramType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"paramType","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\n<td>\n	<span class=\"model-signature\"></span>\n</td>\n";
},"useData":true});
templates['param_list'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " required";
},"3":function(container,depth0,helpers,partials,data) {
    return " multiple=\"multiple\"";
},"5":function(container,depth0,helpers,partials,data) {
    return " required ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <option "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.hasDefault : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=''></option>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "  selected=\"\" ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n      <option "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isDefault : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  value='"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "'> "
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isDefault : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </option>\n\n";
},"11":function(container,depth0,helpers,partials,data) {
    return " selected=\"\"  ";
},"13":function(container,depth0,helpers,partials,data) {
    return " (default) ";
},"15":function(container,depth0,helpers,partials,data) {
    return "<strong>";
},"17":function(container,depth0,helpers,partials,data) {
    return "</strong>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td class='code"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "'><label for='"
    + alias4(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueId","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</label></td>\n<td>\n  <select "
    + ((stack1 = (helpers.isArray || (depth0 && depth0.isArray) || alias2).call(alias1,depth0,{"name":"isArray","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " class=\"parameter "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueId","hash":{},"data":data}) : helper)))
    + "\">\n\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.allowableValues : depth0)) != null ? stack1.descriptiveValues : stack1),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  </select>\n</td>\n<td class=\"markdown\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n<td>"
    + ((stack1 = ((helper = (helper = helpers.paramType || (depth0 != null ? depth0.paramType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"paramType","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\n<td><span class=\"model-signature\"></span></td>\n";
},"useData":true});
templates['param_readonly'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <textarea class='body-textarea' readonly='readonly' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "' id='"
    + alias4(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueId","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"default","hash":{},"data":data}) : helper)))
    + "</textarea>\n        <div class=\"parameter-content-type\" />\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["default"] : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            "
    + container.escapeExpression(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"default","hash":{},"data":data}) : helper)))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "            (empty)\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td class='code'><label for='"
    + alias4(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueId","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</label></td>\n<td>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isBody : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</td>\n<td class=\"markdown\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\n<td>"
    + ((stack1 = ((helper = (helper = helpers.paramType || (depth0 != null ? depth0.paramType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"paramType","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\n<td><span class=\"model-signature\"></span></td>\n";
},"useData":true});
templates['param_readonly_required'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <textarea class='body-textarea' readonly='readonly' placeholder='(required)' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "' id='"
    + alias4(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueId","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"default","hash":{},"data":data}) : helper)))
    + "</textarea>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["default"] : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            "
    + container.escapeExpression(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"default","hash":{},"data":data}) : helper)))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "            (empty)\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td class='code required'><label for='"
    + alias4(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueId","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</label></td>\n<td>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isBody : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</td>\n<td class=\"markdown\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\n<td>"
    + ((stack1 = ((helper = (helper = helpers.paramType || (depth0 != null ? depth0.paramType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"paramType","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\n<td><span class=\"model-signature\"></span></td>\n";
},"useData":true});
templates['param_required'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isFile : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<input type=\"file\" name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "' id='"
    + alias4(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueId","hash":{},"data":data}) : helper)))
    + "'/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["default"] : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<div class=\"editor_holder\"></div>\n				<textarea class='body-textarea required' placeholder='(required)' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "' id=\""
    + alias4(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueId","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"default","hash":{},"data":data}) : helper)))
    + "</textarea>\n        <br />\n        <div class=\"parameter-content-type\" />\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<textarea class='body-textarea required' placeholder='(required)' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "' id='"
    + alias4(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueId","hash":{},"data":data}) : helper)))
    + "'></textarea>\n				<div class=\"editor_holder\"></div>\n				<br />\n				<div class=\"parameter-content-type\" />\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isFile : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<input class='parameter' class='required' type='file' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "' id='"
    + alias4(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueId","hash":{},"data":data}) : helper)))
    + "'/>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.renderTextParam || (depth0 && depth0.renderTextParam) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"renderTextParam","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td class='code required'><label for='"
    + alias4(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valueId","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</label></td>\n<td>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isBody : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "</td>\n<td>\n	<strong><span class=\"markdown\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span></strong>\n</td>\n<td>"
    + ((stack1 = ((helper = (helper = helpers.paramType || (depth0 != null ? depth0.paramType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"paramType","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\n<td><span class=\"model-signature\"></span></td>\n";
},"useData":true});
templates['parameter_content_type'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.consumes : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "  <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <option value=\"application/json\">application/json</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<label for=\""
    + alias4(((helper = (helper = helpers.parameterContentTypeId || (depth0 != null ? depth0.parameterContentTypeId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"parameterContentTypeId","hash":{},"data":data}) : helper)))
    + "\" data-sw-translate>Parameter content type:</label>\n<select name=\"parameterContentType\" id=\""
    + alias4(((helper = (helper = helpers.parameterContentTypeId || (depth0 != null ? depth0.parameterContentTypeId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"parameterContentTypeId","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.consumes : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</select>\n";
},"useData":true});
templates['popup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"api-popup-dialog-wrapper\">\n    <div class=\"api-popup-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"api-popup-content\"></div>\n    <p class=\"error-msg\"></p>\n    <div class=\"api-popup-actions\">\n        <button class=\"api-popup-cancel api-button gray\" type=\"button\">Cancel</button>\n    </div>\n</div>\n<div class=\"api-popup-dialog-shadow\"></div>";
},"useData":true});
templates['resource'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " : ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <li>\n      <a href='"
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + "' data-sw-translate>Raw</a>\n    </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "<div class='heading'>\n  <h2>\n    <a href='#!/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "' class=\"toggleEndpointList\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a> ";
  stack1 = ((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias2),(options={"name":"summary","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.summary) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ((stack1 = ((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  </h2>\n  <ul class='options'>\n    <li>\n      <a href='#!/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "' id='endpointListTogger_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "' class=\"toggleEndpointList\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-sw-translate>Show/Hide</a>\n    </li>\n    <li>\n      <a href='#' class=\"collapseResource\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-sw-translate>\n        List Operations\n      </a>\n    </li>\n    <li>\n      <a href='#' class=\"expandResource\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-sw-translate>\n        Expand Operations\n      </a>\n    </li>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n</div>\n<ul class='endpoints' id='"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_endpoint_list' style='display:none'>\n\n</ul>\n";
},"useData":true});
templates['response_content_type'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.produces : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "  <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <option value=\"application/json\">application/json</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<label data-sw-translate for=\""
    + alias4(((helper = (helper = helpers.responseContentTypeId || (depth0 != null ? depth0.responseContentTypeId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"responseContentTypeId","hash":{},"data":data}) : helper)))
    + "\">Response Content Type</label>\n<select name=\"responseContentType\" id=\""
    + alias4(((helper = (helper = helpers.responseContentTypeId || (depth0 != null ? depth0.responseContentTypeId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"responseContentTypeId","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.produces : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</select>\n";
},"useData":true});
templates['signature'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "\n<div>\n<ul class=\"signature-nav\">\n  <li><a class=\"description-link\" href=\"#\" data-sw-translate>Model</a></li>\n  <li><a class=\"snippet-link\" href=\"#\" data-sw-translate>Example Value</a></li>\n</ul>\n<div>\n\n<div class=\"signature-container\">\n  <div class=\"description\">\n    "
    + ((stack1 = ((helper = (helper = helpers.signature || (depth0 != null ? depth0.signature : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"signature","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  </div>\n\n  <div class=\"snippet\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sampleJSON : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sampleXML : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "      <div class=\"snippet_json\">\n        <pre><code>"
    + container.escapeExpression(((helper = (helper = helpers.sampleJSON || (depth0 != null ? depth0.sampleJSON : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"sampleJSON","hash":{},"data":data}) : helper)))
    + "</code></pre>\n        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isParam : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "<small class=\"notice\" data-sw-translate></small>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "    <div class=\"snippet_xml\">\n      <pre><code>"
    + container.escapeExpression(((helper = (helper = helpers.sampleXML || (depth0 != null ? depth0.sampleXML : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"sampleXML","hash":{},"data":data}) : helper)))
    + "</code></pre>\n      "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isParam : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    "
    + container.escapeExpression(((helper = (helper = helpers.signature || (depth0 != null ? depth0.signature : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"signature","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.sampleJSON : depth0),"||",(depth0 != null ? depth0.sampleXML : depth0),{"name":"ifCond","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
templates['status_code'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "      <tr>\n        <td>"
    + alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"key","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias1(alias2((depth0 != null ? depth0.description : depth0), depth0))
    + "</td>\n        <td>"
    + alias1(alias2((depth0 != null ? depth0.type : depth0), depth0))
    + "</td>\n      </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<td width='15%' class='code'>"
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data}) : helper)))
    + "</td>\n<td class=\"markdown\">"
    + ((stack1 = ((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\n<td width='50%'><span class=\"model-signature\" /></td>\n<td class=\"headers\">\n  <table>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.headers : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n</td>";
},"useData":true});
})();} 
 /* jshint ignore:end */