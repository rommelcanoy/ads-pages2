Bootstrapper.bindDOMParsed(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var CANDY_RACK="candyrack";var CANDY_RACK_POP_UP="candyrack-pop-up";var CANDY_RACK_RENEWAL_POP_UP="candyrack-renewal-pop-up";var CANDY_RACK_GENERAL_POP_UP="candyrack-general-pop-up";var MINI_CART="minicart";var isCartSingle=false;var isFamilyDeferred=false;if(window.cart_flow_id.indexOf("cartsingle")>=0)isCartSingle=true;else if(window.cart_flow_id.indexOf("family")>=0)isFamilyDeferred=
true;updateOmnitureEvents=function(data,action,pgtype,omniSkuCode){var pageName="store:"+window.country+":cart:billing";if(isCartSingle)if(window.pagename&&window.pagename.indexOf("ch1pl")>=0)pageName="store:"+window.country+":cart:cartsingle ch1pl";else pageName="store:"+window.country+":cart:cartsingle ch1";else if(isFamilyDeferred)pageName="store:"+window.country+":family enrollment";s.prop41=s.eVar41="store";var linkNamePrefix="store_cart";om_addcart=function(pgtype){var action="addtocart";if(pgtype===
CANDY_RACK){s.eVar18=String(pageName+":cart:"+pgtype+":"+action).toLowerCase();s.eVar75=String(linkNamePrefix+":cart_"+CANDY_RACK+"_"+action).toLowerCase()}else if(pgtype===CANDY_RACK_POP_UP){s.eVar18=String(pageName+":cart:"+pgtype+":"+action).toLowerCase();s.eVar75=String(linkNamePrefix+":minicart_"+CANDY_RACK_POP_UP+"_"+action).toLowerCase()}else if(pgtype===CANDY_RACK_RENEWAL_POP_UP){s.eVar18=String(pageName+":cart:"+pgtype+":"+action).toLowerCase();s.eVar75=String(linkNamePrefix+":minicart_"+
CANDY_RACK_RENEWAL_POP_UP+"_"+action).toLowerCase()}else if(pgtype===CANDY_RACK_GENERAL_POP_UP){s.eVar18=String(pageName+":cart:"+pgtype+":"+action).toLowerCase();s.eVar75=String(linkNamePrefix+":minicart_"+CANDY_RACK_GENERAL_POP_UP+"_"+action).toLowerCase()}else if(pgtype==="addFamily"){s.eVar18=String(pageName+":cart:"+action).toLowerCase();s.eVar75=String(linkNamePrefix+":cart_"+action).toLowerCase()}else if(pgtype=="addedFromRetrieve"){s.eVar18=String(pageName+":cart:"+action).toLowerCase();s.eVar75=
"store_emptycart_retrievemyitems_addtocart"}else{s.eVar18=String(pageName+":minicart:"+CANDY_RACK+":"+action).toLowerCase();s.eVar75=String(linkNamePrefix+":minicart_"+CANDY_RACK+"_"+action).toLowerCase()}s.prop35="D\x3dv18";s.linkTrackVars="events,products,eVar18,prop35";s.events="scAdd";s.linkTrackEvents="scAdd";s.products=omniSkuCode;trackCustomLink.addToCart();s.prop35=s.eVar18=s.eVar75=s.events=s.products=s.linkTrackEvents=""};om_removecart=function(){var action="removeproduct";s.eVar18=String(pageName+
":"+pgtype+":"+action).toLowerCase();s.eVar75=String(linkNamePrefix+":"+pgtype+"_"+action).toLowerCase();s.prop35="D\x3dv18";s.linkTrackVars="events,products,eVar18,prop35";s.events="scRemove";s.linkTrackEvents="scRemove";if(omniSkuCode)s.products=omniSkuCode.split("|")[0];trackCustomLink.removeFromCart();s.prop35=s.eVar18=s.eVar75=s.events=s.products=s.linkTrackEvents=""};om_updateCandyRack=function(){s.events=s.products=s.linkTrackEvents=s.linkTrackVars="";s.products=window.nortonAnalytics.store_ucproducts;
s.events="event4";s.prop41=s.eVar41="store";s.linkTrackVars="events,products,prop41,eVar41";s.linkTrackEvents=s.events;s.tl(true,"o","store_cross-sell");s.events=s.products=s.linkTrackVars=s.linkTrackEvents=""};om_updateCandyRackPopupDisplayed=function(data){var products_renewal="";if(data=="store_cross-sell_renewal_pop-up-displayed"&&!!window.nortonAnalytics.store_companionproducts)products_renewal=window.nortonAnalytics.store_companionproducts;s.events=s.products=s.linkTrackEvents=s.linkTrackVars=
"";s.products=!!products_renewal?products_renewal:window.nortonAnalytics.store_ucproducts;s.events="event4";s.prop41=s.eVar41="store";s.linkTrackVars="events,products,prop41,eVar41";s.linkTrackEvents=s.events;var linkName=data;s.tl(true,"o",linkName);s.events=s.products=s.prop41=s.eVar41=s.linkTrackVars=s.linkTrackEvents=""};om_updateCandyRackDisplayed=function(){s.events=s.products=s.linkTrackEvents=s.linkTrackVars="";s.products=window.nortonAnalytics.store_ucproducts;s.events="event4";s.prop41=
s.eVar41="store";s.linkTrackVars="events,products,prop41,eVar41";s.linkTrackEvents=s.events;var linkName="store_candyrack-displayed";s.tl(true,"o",linkName);s.events=s.products=s.linkTrackVars=s.linkTrackEvents=""};om_trialDaysPopupDisplayed=function(data){s.events=s.products=s.linkTrackEvents=s.linkTrackVars="";s.prop41=s.eVar41="store";s.linkTrackVars="events,products,prop41,eVar41";var linkName="store-trial"+data+"days-popup_abandoncart";s.tl(true,"o",linkName);s.events=s.products=s.linkTrackVars=
s.linkTrackEvents=""};om_sessionAboutToExpirePopupDisplayed=function(){s.events=s.products=s.linkTrackEvents=s.linkTrackVars="";s.prop41=s.eVar41="store";s.linkTrackVars="events,products,prop41,eVar41";var linkName="store_sessionabouttoexpire-popup";s.tl(true,"o",linkName);s.events=s.products=s.linkTrackVars=s.linkTrackEvents=""};om_sessionAboutToExpirePopupContinue=function(){s.events=s.products=s.linkTrackEvents=s.linkTrackVars="";s.prop41=s.eVar41="store";s.linkTrackVars="events,products,prop41,eVar41";
var linkName="store_sessionabouttoexpire-continue";s.tl(true,"o",linkName);s.events=s.products=s.linkTrackVars=s.linkTrackEvents=""};om_sessionExpiredPageDisplayed=function(){s.pageName="store:"+window.country+":cart:expired session";s.eVar18=s.pageName;delete s.events;s.t();s.events=""};om_store_account_creation_revamp=function(data){s.events=s.products=s.linkTrackEvents=s.linkTrackVars="";s.prop41=s.eVar41="store";s.linkTrackVars="events,products,prop41,eVar41";var linkName=data;s.tl(true,"o",linkName);
s.events=s.products=s.linkTrackVars=s.linkTrackEvents=""};om_applyCoupon=function(data){s.linkTrackVars="events,products,eVar18,prop35";s.events=s.products=s.linkTrackEvents="";s.eVar9=String(omniSkuCode).toLowerCase();s.linkTrackVars+=",eVar9";s.eVar18=pageName+":cart:applycoupon";s.prop35="D\x3dv18";s.products=data.omnitureContent.products;trackCustomLink.coupon();s.eVar9="";s.eVar11=s.prop35=s.eVar18=s.eVar75=s.events=s.products=s.linkTrackEvents=""};om_selectHDYHAU=function(data){s.events=s.products=
s.linkTrackEvents=s.linkTrackVars="";s.linkTrackVars="eVar89,eVar53,eVar33,eVar27,eVar41,prop41";s.eVar89=data;s.prop41=s.eVar41="store";s.tl(true,"o","store-confirmation-hdyhau");s.eVar89=s.eVar53=s.eVar33=s.eVar28=s.events=s.products=s.linkTrackEvents=s.linkTrackVars=""};om_redeemService=function(data){s.events="event67";s.prop41=s.eVar41="store";s.linkTrackVars="eVar41,prop41,events";s.linkTrackEvents="event67";s.tl(true,"o","store-confirmation-redeemservice_"+data);s.linkTrackVars=s.linkTrackEvents=
s.events=""};om_bfcCheckbox_displayed=function(){s.products="";s.events="event27";s.prop41=s.eVar41="store";s.linkTrackVars="eVar41,prop41,events";s.linkTrackEvents=s.events;var linkName="store_bfac_login_checkbox-displayed";s.tl(true,"o",linkName);s.events=s.linkTrackVars=s.linkTrackEvents=""};om_bfcCheckbox_checked=function(){s.products="";s.events="event28";s.prop41=s.eVar41="store";s.linkTrackVars="eVar41,prop41,events";s.linkTrackEvents=s.events;var linkName="store_bfac_billing_fields-displayed";
s.tl(true,"o",linkName);s.events=s.linkTrackVars=s.linkTrackEvents=""};om_bfcData_Entered=function(){s.products="";s.events="event29";s.prop41=s.eVar41="store";s.linkTrackVars="eVar41,prop41,events";s.linkTrackEvents=s.events;var linkName="store_bfac_billing_successfully-entered";s.tl(true,"o",linkName);s.events=s.linkTrackVars=s.linkTrackEvents=""};switch(action){case "CVV_HELP":trackCustomLink.cvvHelp();break;case "GET_HELP":trackCustomLink.getHelp();break;case "proccedtosecurecheckout":trackCustomLink.proceedToSecureCheckout();
break;case "addcart":om_addcart(pgtype);break;case "removecart":om_removecart();break;case "updateCandyRack":om_updateCandyRack();break;case "updateCandyRackPopupDisplayed":om_updateCandyRackPopupDisplayed(data);break;case "updateCandyRackDisplayed":om_updateCandyRackDisplayed();break;case "updateTrialDaysPopupDisplayed":om_trialDaysPopupDisplayed(data);break;case "sessionAboutToExpirePopupDisplayed":om_sessionAboutToExpirePopupDisplayed();break;case "sessionAboutToExpirePopupContinue":om_sessionAboutToExpirePopupContinue();
break;case "sessionExpiredPageDisplayed":om_sessionExpiredPageDisplayed();break;case "store_account_creation_revamp":om_store_account_creation_revamp(data);break;case "applyCoupon":om_applyCoupon(data,pgtype);break;case "hdyhau_selected":om_selectHDYHAU(data);break;case "redeem_service":om_redeemService(data);break;case "applyTax":trackPageview.applyTax();break;case "shipping":trackPageview.shippingSection();break;case "billing":trackPageview.billingSection();break;case "cart:error_existingcsp":trackPageview.cart_error_existingcsp();
break;case "cart:error_idnav_existingitps":trackPageview.cart_error_idnav_existingitps();break;case "error_idnav_lifelock_existingitps":trackPageview.error_idnav_lifelock_existingitps();break;case "lifelock_error":trackPageview.lifelock_error();break;case "lifelock_error_idv-kba-fail":trackPageview.lifelock_error_idv_kba_fail();break;case "lifelock_enrollment_step_3_add_family_enrollment":trackPageview.addFamilyEnrollment();break;case "lifelock_enrollment_step_3_add_family_optional":trackPageview.addFamilyOptional();
break;case "lifelock_enrollment_step_3_add_family_summary":trackPageview.addFamilySummary();break;case "lifelock_enrollment_step_1":trackPageview.lifelock_enrollment_step_1();break;case "lifelock_enrollment_step_2":trackPageview.lifelock_enrollment_step_2();break;case "lifelock_enrollment_step_3_optional":trackPageview.lifelock_enrollment_step_3_optional();break;case "lifelock_enrollment_step_3_optional_autodowngrade":trackPageview.lifelock_enrollment_step_3_optional_autodowngrade();break;case "lifelock_error_add_family_post_purchase":trackPageview.lifelock_error_add_family_post_purchase();
break;case "popup_annualupsellv1":trackPageview.annualupsellv1();break;case "popup_annualupsellv2":trackPageview.annualupsellv2();break;case "deferred_adult":trackCartSection.deferredAdult();break;case "deferred_minor":trackCartSection.deferredMinor();break;case "0_create_new_account":trackCartSection.createNewAccount();break;case "1_account_info_login":trackCartSection.accountInfoLogin();break;case "1_customer_and_payment_info":trackCartSection.customerPaymentInfo();break;case "1_customer_info":trackCartSection.customerInfoLogin();
break;case "trial_days":trackCartSection.trialDays(data);break;case "2_add_ll_family":trackCartSection.addLLFamily();break;case "2_personal-information":trackCartSection.personalInfo();break;case "3_add_features":trackCartSection.addFeatures();break;case "3_add_features_candyrack_pop_up":trackCartSection.addFeaturesPopup();break;case "3_add_features_candyrack-general_pop_up":trackCartSection.addFeaturesGeneralPopup();break;case "3_add_features_candyrack-renewal_pop_up":trackCartSection.addFeaturesRenewalPopup();
break;case "3_add_features_candyrack_pop_up2":trackCartSection.addFeaturesPopup2();break;case "3_add_features_candyrack-general_pop_up2":trackCartSection.addFeaturesGeneralPopup2();break;case "4_payment_info":trackCartSection.paymentInfo();break;case "1_payment_info":trackCartSection.paymentInfoOtpModal();break;case "5_security_questions":trackCartSection.securityQuestions();break;case "5_security_questions_1":trackCartSection.securityQuestions1();break;case "5_security_questions_2":trackCartSection.securityQuestions2();
break;case "6_additional_account_info":trackCartSection.additionalAccountInfo();break;case "7_additional_payment_information":trackCartSection.additionalPaymentInformation();break;case "same_product_included":trackCartSection.sameProductIncluded();break;case "error_front_end_internal":{s.eVar43=data;trackPageview.error_front_end_internal();break}case "emptyCart":trackCartSection.emptyCart();break;case "retrieveCart":trackCustomLink.retrieveCart();break;case "startShopping":trackCustomLink.startShopping();
break;case "store_additionalaccountinfosection_enterinfo":case "store_additionalaccountinfosection_dolater":case "store_apologies-popup_continue":case "store_apologies-popup_close":trackCustomLink.fakeDoorTest(action);break;case "store_bfac_login_checkbox-displayed":om_bfcCheckbox_displayed();break;case "store_bfac_billing_fields-displayed":om_bfcCheckbox_checked();break;case "store_bfac_billing_successfully-entered":om_bfcData_Entered();break}};trackCustomLink={boilerPlate:function(eventName){s.linkTrackVars===
"None"?s.linkTrackVars="eVar75,events,prop41,eVar41":s.linkTrackVars+=",eVar75,events,prop41,eVar41";s.linkTrackEvents==="None"?s.linkTrackEvents="event14":s.linkTrackEvents+=",event14";if(s.eVar75)eventName=s.eVar75;else s.eVar75=eventName;if(s.events===undefined)s.events="event14";else if(s.events.indexOf("event14")>-1)s.events+="";else s.events+=",event14";s.prop41=s.eVar41="store";s.tl(this,"o",eventName);s.linkTrackEvents=s.prop35=s.eVar18=s.eVar75=s.events=s.products=""},addToCart:function(){this.boilerPlate("hho_store_account_info_AddProduct")},
removeFromCart:function(){this.boilerPlate("hho_store_account_info_removeproduct")},closeBtn:function(){s.linkTrackEvents=s.products="";this.boilerPlate("hho_store_account_info_closethebox")},proceedToSecureCheckout:function(){s.linkTrackEvents=s.products="";this.boilerPlate("hho_store_account_info_proceedtosecurecheckout")},coupon:function(){s.linkTrackEvents=s.products="";this.boilerPlate("hho_store_billing_info_couponlinktracking")},forgotPassword:function(){s.linkTrackEvents=s.products="";this.boilerPlate("hho_store_account_info_forgotpassword")},
cvvHelp:function(){s.linkTrackEvents=s.products="";this.boilerPlate("hho_store_billing_info_cvv")},logOut:function(){s.linkTrackEvents=s.products="";this.boilerPlate("hho_store_billing_info_logout")},getHelp:function(){s.linkTrackEvents=s.products="";this.boilerPlate("hho_store_header_help")},retrieveCart:function(){s.prop41=s.eVar41="store";s.linkTrackVars="eVar41,prop41";s.linkTrackEvents="None";delete s.events;this.boilerPlate("store_cartempty_retrieveitems")},startShopping:function(){s.prop41=
s.eVar41="store";s.linkTrackVars="eVar41,prop41";s.linkTrackEvents="None";delete s.events;this.boilerPlate("store_cartempty_startshopping")},fakeDoorTest:function(customName){s.prop41=s.eVar41="store";s.linkTrackVars="eVar41,prop41";s.linkTrackEvents="None";delete s.events;this.boilerPlate(customName)}};trackCartSection={boilerPlate:function(sectionName){if(window.pagename&&window.pagename.indexOf("ch1pl")>=0)s.pageName="store:"+window.country+":cart:cartsingle ch1pl";else s.pageName="store:"+window.country+
":cart:"+"cartsingle ch1";s.eVar18=s.pageName;s.events="event8";s.eVar60=sectionName;s.prop23="D\x3dv60";s.products=!!window.nortonAnalytics.store_products?window.nortonAnalytics.store_products:"";s.t();s.eVar60=s.prop23=s.events=""},setMboxView:function(sectionName){cartSection=sectionName;if(window.country==="us")mboxUpdate("sym_global_mbox","pageview\x3d"+cartSection);else console.log("no mboxUpdate")},trialDays:function(data){s.pageName="store:"+window.country+":cart:"+"trial"+data+"days";s.eVar18=
s.pageName;s.prop23="D\x3dv60";delete s.events;s.t();s.eVar60=s.prop23=s.events=""},deferredAdult:function(){s.pageName="store:"+window.country+":family enrollment";s.events="event61";s.linkTrackVars="events";s.linkTrackEvents="event61";s.t();s.linkTrackVars=s.linkTrackEvents=s.events=""},deferredMinor:function(){s.pageName="store:"+window.country+":family enrollment";s.events="event62";s.linkTrackVars="events";s.linkTrackEvents="event62";s.t();s.linkTrackVars=s.linkTrackEvents=s.events=""},createNewAccount:function(){if(window.pagename&&
window.pagename.indexOf("ch1pl")>=0)s.pageName="store:"+window.country+":cart:cartsingle ch1pl";else s.pageName="store:"+window.country+":cart:"+"cartsingle ch1";s.events="event13";s.linkTrackVars="events,eVar41,prop41";s.linkTrackEvents="event13";s.tl(true,"o","store_accountcreation");s.linkTrackVars=s.linkTrackEvents=s.events=""},sameProductIncluded:function(){s.events="event65";s.prop41=s.eVar41="store";s.linkTrackVars="eVar41,prop41,events";s.linkTrackEvents="event65";s.tl(true,"o","store_singleton-acquisition-banner");
s.linkTrackVars=s.linkTrackEvents=s.events=""},emptyCart:function(){s.events="event66";s.prop41=s.eVar41="store";s.linkTrackVars="eVar41,prop41,events";s.linkTrackEvents="event66";s.tl(true,"o","store_cartempty");s.linkTrackVars=s.linkTrackEvents=s.events=""},accountInfoLogin:function(){if(!window.carderror){this.boilerPlate("1_account_info_login");this.setMboxView("1_account_info_login")}},customerPaymentInfo:function(){if(!window.carderror){this.boilerPlate("1_customer_and_payment_info");this.setMboxView("1_customer_and_payment_info")}},
customerInfoLogin:function(){if(!window.carderror){this.boilerPlate("1_customer_info");this.setMboxView("1_customer_info")}},addLLFamily:function(){this.boilerPlate("2_add_ll_family");this.setMboxView("2_add_ll_family")},personalInfo:function(){this.boilerPlate("2_personal-information");this.setMboxView("2_personal-information")},addFeatures:function(){this.boilerPlate("3_add_features");this.setMboxView("3_add_features")},addFeaturesPopup:function(){this.boilerPlate("3_add_features_candyrack_pop_up");
this.setMboxView("3_add_features_candyrack_pop_up")},addFeaturesGeneralPopup:function(){this.boilerPlate("3_add_features_candyrack-general_pop_up");this.setMboxView("3_add_features_candyrack-general_pop_up")},addFeaturesRenewalPopup:function(){this.boilerPlate("3_add_features_candyrack-renewal_pop_up");this.setMboxView("3_add_features_candyrack-renewal_pop_up")},addFeaturesPopup2:function(){this.boilerPlate("3_add_features_candyrack_pop_up2");this.setMboxView("3_add_features_candyrack_pop_up2")},
addFeaturesGeneralPopup2:function(){this.boilerPlate("3_add_features_candyrack-general_pop_up2");this.setMboxView("3_add_features_candyrack-general_pop_up2")},paymentInfo:function(){this.boilerPlate("4_payment_info");this.setMboxView("4_payment_info")},paymentInfoOtpModal:function(){this.boilerPlate("1_payment_info");this.setMboxView("1_payment_info")},securityQuestions:function(){this.boilerPlate("5_security_questions");this.setMboxView("5_security_questions")},securityQuestions1:function(){this.boilerPlate("5_security_questions_1");
this.setMboxView("5_security_questions_1")},securityQuestions2:function(){this.boilerPlate("5_security_questions_2");this.setMboxView("5_security_questions_2")},additionalAccountInfo:function(){this.boilerPlate("6_additional_account_info");this.setMboxView("6_additional_account_info")},additionalPaymentInformation:function(){this.boilerPlate("7_additional_payment_information");this.setMboxView("7_additional_payment_information")},setMboxView:function(sectionName){if(window.country==="us")mboxUpdate("sym_global_mbox",
"pageview\x3d"+sectionName);else console.log("no mboxUpdate")}};trackPageview={boilerPlate:function(pageName){function ClearVars(){for(var i=0;i<75;i++){s["prop"+i]="";s["eVar"+i]="";if(i<=5)s["hier"+i]=""}svarArr=["pageName","channel","products","events","campaign","purchaseID","state","zip","server","linkName","linkTrackEvents"];for(var i=0;i<svarArr.length;i++)s[svarArr[i]]=""}ClearVars();s.pageName="store:"+window.country+":cart:"+pageName;s.eVar18=s.pageName;if(pageName==="cartoverlay")s.events=
"scView";s.prop35="D\x3dv18";s.t();s.eVar18=s.prop35=s.events=""},sendGAPageView:function(pageName){if(typeof ga!=="undefined"){ga("set","page","/store:"+window.country+":cart:"+pageName);ga("send","pageview")}else console.log("no ga")},setMboxView:function(pageName){completePageName="store:"+window.country+":cart:"+pageName;if(window.country==="us")mboxUpdate("sym_global_mbox","pageview\x3d"+completePageName);else console.log("no mboxUpdate")},billingSection:function(){this.boilerPlate("billing");
this.sendGAPageView("billing");this.setMboxView("billing")},cart_error_existingcsp:function(){this.boilerPlate("error_existingcsp");this.sendGAPageView("error_existingcsp");this.setMboxView("error_existingcsp")},cart_error_idnav_existingitps:function(){this.boilerPlate("error_idnav_existingitps");this.sendGAPageView("error_idnav_existingitps");this.setMboxView("error_idnav_existingitps")},error_idnav_lifelock_existingitps:function(){this.boilerPlate("error_idnav_lifelock_existingitps");this.sendGAPageView("error_idnav_lifelock_existingitps");
this.setMboxView("error_idnav_lifelock_existingitps")},shippingSection:function(){this.boilerPlate("shipping");this.sendGAPageView("shipping");this.setMboxView("shipping")},applyTax:function(){this.boilerPlate("revieworderonline");this.sendGAPageView("revieworderonline");this.setMboxView("revieworderonline")},lifelock_error:function(){this.boilerPlate("lifelock_error");this.sendGAPageView("lifelock_error");this.setMboxView("lifelock_error")},lifelock_error_idv_kba_fail:function(){this.boilerPlate("lifelock_error_idv-kba-fail");
this.sendGAPageView("lifelock_error_idv-kba-fail");this.setMboxView("lifelock_error_idv-kba-fail")},lifelock_enrollment_step_1:function(){this.boilerPlate("lifelock_enrollment_step_1");this.sendGAPageView("lifelock_enrollment_step_1");this.setMboxView("lifelock_enrollment_step_1")},lifelock_enrollment_step_2:function(){this.boilerPlate("lifelock_enrollment_step_2");this.sendGAPageView("lifelock_enrollment_step_2");this.setMboxView("lifelock_enrollment_step_2")},lifelock_enrollment_step_3_optional:function(){this.boilerPlate("lifelock_enrollment_step_3_optional");
this.sendGAPageView("lifelock_enrollment_step_3_optional");this.setMboxView("lifelock_enrollment_step_3_optional")},addFamilyOptional:function(){this.boilerPlate("lifelock_enrollment_step_3_add_family_optional");this.sendGAPageView("lifelock_enrollment_step_3_add_family_optional");this.setMboxView("lifelock_enrollment_step_3_add_family_optional")},addFamilyEnrollment:function(){this.boilerPlate("lifelock_enrollment_step_3_add_family_enrollment");this.sendGAPageView("lifelock_enrollment_step_3_add_family_enrollment");
this.setMboxView("lifelock_enrollment_step_3_add_family_enrollment")},addFamilySummary:function(){this.boilerPlate("lifelock_enrollment_step_3_add_family_summary");this.sendGAPageView("lifelock_enrollment_step_3_add_family_summary");this.setMboxView("lifelock_enrollment_step_3_add_family_summary")},lifelock_enrollment_step_3_optional_autodowngrade:function(){this.boilerPlate("lifelock_enrollment_step_3_optional_autodowngrade");this.sendGAPageView("lifelock_enrollment_step_3_optional_autodowngrade");
this.setMboxView("lifelock_enrollment_step_3_optional_autodowngrade")},lifelock_error_add_family_post_purchase:function(){this.boilerPlate("lifelock_error_add_family_post_purchase");this.sendGAPageView("lifelock_error_add_family_post_purchase");this.setMboxView("lifelock_error_add_family_post_purchase")},error_front_end_internal:function(){this.boilerPlate("error_front_end_internal");this.sendGAPageView("error_front_end_internal");this.setMboxView("error_front_end_internal")},annualupsellv1:function(){this.boilerPlate("popup_annualupsellv1");
this.sendGAPageView("popup_annualupsellv1");this.setMboxView("popup_annualupsellv1")},annualupsellv2:function(){this.boilerPlate("popup_annualupsellv2");this.sendGAPageView("popup_annualupsellv2");this.setMboxView("popup_annualupsellv2")}};trackBillingErrors=function(location,errorCode){if(!window.carderror){var error=String("store-errors_"+location+":"+errorCode).toLowerCase();s.linkTrackVars="eVar11,eVar41,prop41";s.prop41=s.eVar41="store";s.eVar11="user:"+error;s.tl(true,"o",error);s.eVar11=""}}},
4050455,314478);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var ensVar0=function(){return this};var ensVar1=function(){return};var ensVar2=function(){return window.total_cart_value};var ensVar3=function(){return window.om_program_type_param};var ensVar4=function(){return window.current_subchannel};var ensVar5=function(){return window.products};var sstDomain="ensighten.norton.com",sstVersion="1.0.0",eventName="sstCheckoutGlobal",eventData=
ensVar0.call(this),publishPath="sst",customData={},customParams={},dataLayerName="nortonAnalytics",specifiedDataLayer=ensVar1.call(this),dataLayer=specifiedDataLayer||(dataLayerName&&window[dataLayerName]?window[dataLayerName]:{}),nexusHost="nexus.ensighten.com",clean=function(obj){for(var propName in obj)if(obj.hasOwnProperty(propName)&&(obj[propName]===null||obj[propName]===undefined||obj===""||obj[propName]===""))delete obj[propName];return obj},getSettings=function(){var settings={nexusHost:Bootstrapper.ensightenOptions.nexus===
"nexus-test.ensighten.com"?"nexus-test.ensighten.com":nexusHost,publishPath:publishPath};return clean(settings)},getVirtualBrowser=function(){var virtualBrowser={page:window.location.href,language:navigator.languages?navigator.languages.join(","):navigator.language,screenDepth:window.screen?window.screen.colorDepth||window.screen.pixelDepth:undefined,height:window.innerHeight||(document.documentElement?document.documentElement.offsetHeight:undefined),width:window.innerWidth||(document.documentElement?
document.documentElement.offsetWidth:undefined),title:document.title,referrer:document.referrer,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,screenHeight:window.screen?window.screen.height:undefined,screenWidth:window.screen?window.screen.width:undefined};return clean(virtualBrowser)},getDataLayer=function(){var sstDataLayer={};if(Object.keys(dataLayer).length>0)sstDataLayer[dataLayerName]=dataLayer;if(Object.keys(customData).length>0)sstDataLayer.customData=customData;return clean(sstDataLayer)},
getEvent=function(){var event={};if(eventName);var event={name:eventName,data:eventData};return clean(event)},getSstData=function(){var sstData={},virtualBrowser=getVirtualBrowser(),settings=getSettings(),dataLayer=getDataLayer(),event=getEvent();if(Object.keys(settings).length>0)sstData.settings=settings;if(Object.keys(virtualBrowser).length>0)sstData.virtualBrowser=virtualBrowser;if(Object.keys(dataLayer).length>0)sstData.dataLayer=dataLayer;if(Object.keys(event).length>0)sstData.events=[event];
return JSON.stringify(sstData)},buildSstQueryString=function(){var queryParams=["sstVersion\x3d"+sstVersion];queryParams.push("sstData\x3d"+encodeURIComponent(getSstData()));for(var i in customParams)if(customParams.hasOwnProperty(i))queryParams.push(i+"\x3d"+encodeURIComponent(customParams[i]));return queryParams.join("\x26")};customData["cartTotal"]=ensVar2.call(this);customData["program_type"]=ensVar3.call(this);customData["currentSubChannel"]=ensVar4.call(this);customData["products"]=ensVar5.call(this);
(new Image).src="https://"+sstDomain+"/pc/"+Bootstrapper.ensightenOptions.client+"/sst?"+buildSstQueryString()},3716630,713983);
Bootstrapper.bindDOMLoaded(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;(()=>{try{var observer=new MutationObserver(function(mutations,me){var spanElements=document.querySelectorAll('div label \x3e div \x3e span[data-test\x3d"METHOD"]');var paymentElement=document.querySelector('[data-test\x3d"PAYMENT"]');if(paymentElement)paymentElement.querySelector('[data-test\x3d"SUBMIT"]').onclick=function(){if(document.cookie.indexOf("ccai_chat_details")>
-1){var ccai_data=Bootstrapper.Cookies.get("ccai_chat_details");var ccai_arr=ccai_data.split(",");var ccai_object={};for(var i=0;i<ccai_arr.length;i++){var ccai_ga=ccai_arr[i];ccai_ga=ccai_ga.trim();ccai_ga=ccai_ga.replace(/"/g,"");var ccai_ga_data=ccai_ga.split(":");ccai_object[ccai_ga_data[0]]=ccai_ga_data[1];var agent_id=ccai_object.agent_id;var end_user_id=ccai_object.end_user_id;var chat_id=ccai_object.chat_id}}else{var agent_id="";var end_user_id="";var chat_id=""}try{(function(gtag){gtag("event",
"add_payment_info",{"send_to":"GA4","currency":"USD","value":CART_OBJECT_NS.CartTotal,"coupon":window.promoid,"items":[{"item_name":CART_OBJECT_NS.cartObject[0].ProductCode,"item_id":CART_OBJECT_NS.cartObject[0].SKUCode,"quantity":CART_OBJECT_NS.cartObject[0].Quantity}],"agent_id":agent_id,"end_user_id":end_user_id,"chat_id":chat_id})})(window.gtag)}catch(e){console.log("Error:  "+e.message)}}});observer.observe(document,{childList:true,subtree:true})}catch(e){console.log("error while adding new component"+
e.message)}})()},3994155,760408);Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.insertScript("https://www.googletagmanager.com/gtag/js?id\x3d"+"G-FG3M2ET3ED");window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date);gtag("config","G-FG3M2ET3ED",{"groups":"GA4"})},3994173,760395);
Bootstrapper.bindDependencyDOMLoaded(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;if(document.cookie.indexOf("ccai_chat_details")>-1){var ccai_data=Bootstrapper.Cookies.get("ccai_chat_details");var ccai_arr=ccai_data.split(",");var ccai_object={};for(var i=0;i<ccai_arr.length;i++){var ccai_ga=ccai_arr[i];ccai_ga=ccai_ga.trim();ccai_ga=ccai_ga.replace(/"/g,"");var ccai_ga_data=ccai_ga.split(":");ccai_object[ccai_ga_data[0]]=ccai_ga_data[1];var agent_id=
ccai_object.agent_id;var end_user_id=ccai_object.end_user_id;var chat_id=ccai_object.chat_id}}else{var agent_id="";var end_user_id="";var chat_id=""}try{(function(gtag){gtag("event","add_to_cart",{"send_to":"GA4","currency":s.currencyCode,"value":CART_OBJECT_NS.CartTotal,"items":[{"item_name":CART_OBJECT_NS.cartObject[0].ProductCode,"item_id":CART_OBJECT_NS.cartObject[0].SKUCode,"quantity":CART_OBJECT_NS.cartObject[0].Quantity}],"agent_id":agent_id,"end_user_id":end_user_id,"chat_id":chat_id})})(window.gtag)}catch(e){console.log("Error:  "+
e.message)}try{(function(gtag){gtag("event","begin_checkout",{"send_to":"GA4","currency":s.currencyCode,"value":CART_OBJECT_NS.CartTotal,"items":[{"item_name":CART_OBJECT_NS.cartObject[0].ProductCode,"item_id":CART_OBJECT_NS.cartObject[0].SKUCode,"quantity":CART_OBJECT_NS.cartObject[0].Quantity}],"agent_id":agent_id,"end_user_id":end_user_id,"chat_id":chat_id})})(window.gtag)}catch(e){console.log("Error:  "+e.message)}},3994170,[3994173],760397,[760395]);