(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39130460"],{9344:function(e,t,i){"use strict";i("dae4")},dae4:function(e,t,i){},e922:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"mt-3 mb-15",attrs:{fluid:"","fill-height":""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-card",{attrs:{width:"80%"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",staticStyle:{padding:"0px"},attrs:{md:"4"}},[n("v-img",{staticClass:"align-center",attrs:{src:i("ef50"),height:"655px",width:"100%"}},[n("h1",{staticClass:"white--text",staticStyle:{"font-size":"3.5em !important"}},[e._v(" ¿NOVEDADES? ")])])],1),n("v-col",{attrs:{md:"8"}},[n("v-form",[n("v-row",{staticClass:"mt-7",attrs:{justify:"center"}},[n("h1",{staticClass:"title"},[e._v("AÑADIR MOVIMIENTO")])]),n("v-row",{staticClass:"mt-10",attrs:{justify:"center"}},[n("v-btn",{staticClass:"but white--text",staticStyle:{"margin-right":"15px"},attrs:{color:e.color2,large:""},on:{click:function(t){e.pressedI=!0,e.pressedG=!1,e.movementType="Ingreso",e.switchI()}},model:{value:e.pressedI,callback:function(t){e.pressedI=t},expression:"pressedI"}},[e._v(" INGRESO "),n("v-icon",{staticStyle:{"margin-right":"-9px"}},[e._v("mdi-chevron-up ")])],1),n("v-btn",{staticClass:"but white--text",staticStyle:{"margin-left":"15px"},attrs:{color:e.color1,large:""},on:{click:function(t){e.pressedI=!1,e.pressedG=!0,e.movementType="Gasto",e.switchG()}},model:{value:e.pressedG,callback:function(t){e.pressedG=t},expression:"pressedG"}},[e._v(" GASTO "),n("v-icon",{staticStyle:{"margin-right":"-9px"}},[e._v("mdi-chevron-down ")])],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{md:"6"}},[n("v-text-field",{staticClass:"customText",attrs:{id:"movementConcept",label:"Concepto",name:"movementConcept",type:"text",required:"","error-messages":e.conceptErrors},on:{input:function(t){return e.$v.movementConcept.$touch()},blur:function(t){return e.$v.movementConcept.$touch()}},model:{value:e.movementConcept,callback:function(t){e.movementConcept=t},expression:"movementConcept"}})],1),n("v-col",{staticClass:"text-center",attrs:{md:"6"}},[n("v-text-field",{staticClass:"customText",attrs:{id:"movementAmount",label:"Importe (€)",name:"movementAmount",type:"number",required:"","error-messages":e.amountErrors},on:{input:function(t){return e.$v.movementAmount.$touch()},blur:function(t){return e.$v.movementAmount.$touch()}},model:{value:e.movementAmount,callback:function(t){e.movementAmount=t},expression:"movementAmount"}})],1)],1),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"text-center",attrs:{md:"6"}},[n("v-btn",{staticClass:"but white--text",staticStyle:{"margin-right":"15px"},attrs:{color:e.color3,large:""},on:{click:function(t){e.pressedU=!0,e.pressedP=!1,e.switchU()}},model:{value:e.pressedU,callback:function(t){e.pressedU=t},expression:"pressedU"}},[e._v(" PUNTUAL ")]),n("v-btn",{staticClass:"but white--text",staticStyle:{"margin-left":"15px"},attrs:{color:e.color4,large:""},on:{click:function(t){e.pressedU=!1,e.pressedP=!0,e.switchP()}},model:{value:e.pressedP,callback:function(t){e.pressedP=t},expression:"pressedP"}},[e._v(" PERIÓDICO ")])],1),n("v-col",[n("v-select",{staticClass:"customText",attrs:{required:"",label:"Categoría",items:e.categories,"error-messages":e.categoryErrors},on:{input:function(t){return e.$v.movementCategory.$touch()},blur:function(t){return e.$v.movementCategory.$touch()}},model:{value:e.movementCategory,callback:function(t){e.movementCategory=t},expression:"movementCategory"}})],1)],1),n("v-row",[n("v-col",{attrs:{justify:"center",align:"center"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({staticClass:"customText",attrs:{label:"Fecha de Inicio","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.initialDate,callback:function(t){e.initialDate=t},expression:"initialDate"}},"v-text-field",o,!1),i))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[n("v-date-picker",{attrs:{landscape:!0},on:{input:function(t){e.menu2=!1}},model:{value:e.initialDate,callback:function(t){e.initialDate=t},expression:"initialDate"}})],1)],1),n("v-col",{attrs:{justify:"center",align:"center"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({class:{customText:!e.isUnique,disabledText:e.isUnique},attrs:{disabled:e.isUnique,label:"Fecha de Fin (Opcional)","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.finalDate,callback:function(t){e.finalDate=t},expression:"finalDate"}},"v-text-field",o,!1),i))]}}]),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[n("v-date-picker",{attrs:{disabled:e.isUnique,landscape:!0,min:e.initialDate},on:{input:function(t){e.menu1=!1}},model:{value:e.finalDate,callback:function(t){e.finalDate=t},expression:"finalDate"}})],1)],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"d-flex justify-space-around",attrs:{md:"6"}},[n("v-textarea",{staticClass:"customText",attrs:{outlined:"",name:"movementComment",label:"Comentario","no-resize":""},model:{value:e.movementComment,callback:function(t){e.movementComment=t},expression:"movementComment"}})],1),n("v-col",{staticStyle:{"padding-top":"0px"},attrs:{md:"6"}},[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",[n("v-text-field",{staticClass:"dis disLeft",class:{customText:!e.isUnique,disabledText:e.isUnique},attrs:{disabled:e.isUnique,id:"movementFreq",label:"Frecuencia",name:"movementFreq",type:"number","error-messages":e.frequencyErrors},on:{input:function(t){return e.$v.movementFreq.$touch()},blur:function(t){return e.$v.movementFreq.$touch()}},model:{value:e.movementFreq,callback:function(t){e.movementFreq=t},expression:"movementFreq"}})],1),n("v-col",[n("div"),n("v-select",{staticClass:"dis disRight",class:{customText:!e.isUnique,disabledText:e.isUnique},attrs:{disabled:e.isUnique,label:"Unidad de frecuencia",items:e.freqUnits,"error-messages":e.freqUnitErrors},on:{input:function(t){return e.$v.freqUnit.$touch()},blur:function(t){return e.$v.freqUnit.$touch()}},model:{value:e.freqUnit,callback:function(t){e.freqUnit=t},expression:"freqUnit"}})],1)],1),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"text-center"},[n("v-btn",{staticClass:"but white--text",staticStyle:{"margin-right":"30px"},attrs:{color:"primary",large:""},on:{click:e.clear}},[e._v("BORRAR TODO")]),n("v-btn",{staticClass:"but white--text",staticStyle:{"margin-left":"10px"},attrs:{color:"primary",large:""},on:{click:e.confirm}},[e._v("CONFIRMAR")])],1)],1)],1)],1)],1)],1)],1)],1),n("v-btn",{staticClass:"mb-14",staticStyle:{"font-size":"2em"},attrs:{fab:"",dark:"",large:"",color:"primary",fixed:"",right:"",bottom:""},on:{click:function(t){e.dialog=!0}}},[e._v("?")]),n("Help",{attrs:{title:"AÑADIR MOVIMIENTO"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}})],1)],1)},o=[],r=i("5530"),s=i("2f62"),a=i("ca2c"),c=i("1dce"),m=i("b5ae"),u=function(e){return 100*e%1==0},l={name:"AddMovement",components:{Help:a["a"]},mixins:[c["validationMixin"]],validations:{movementConcept:{required:m["required"],maxLength:Object(m["maxLength"])(20)},movementAmount:{required:m["required"],decimal:m["decimal"],minAmount:function(e){return e>=.01},twoDecimals:u},movementFreq:{required:Object(m["requiredIf"])((function(e){return 0==this.isUnique})),integer:m["integer"],minFreq:function(e){return e>0}},movementCategory:{required:m["required"]},freqUnit:{required:Object(m["requiredIf"])((function(e){return 0==this.isUnique}))},movementType:{required:m["required"]},initialDate:{required:m["required"]},finalDate:{isAfter:function(e){var t=new Date(this.initialDate),i=new Date(e);return i>t}}},data:function(){return{dialog:!1,color1:"#445e73",color2:"#13314a",color3:"#445e73",color4:"#13314a",isUnique:!0,pressedI:!1,pressedG:!0,pressedP:!1,pressedU:!0,freqUnits:["Día","Semana","Mes","Año"],initialDate:(new Date).toISOString().substr(0,10),menu2:!1,menu1:!1,finalDate:null,movementConcept:"",movementComment:"",movementFreq:void 0,freqUnit:"",movementAmount:void 0,movementType:"Gasto",movementCategory:void 0,submitStatus:null}},methods:Object(r["a"])({switchG:function(){this.color1="#445e73",this.color2="#13314a"},switchI:function(){this.color2="#445e73",this.color1="#13314a"},switchU:function(){this.color3="#445e73",this.color4="#13314a",this.isUnique=!0},switchP:function(){this.color4="#445e73",this.color3="#13314a",this.isUnique=!1},confirm:function(){var e=this;this.$v.$touch(),this.isInvalid()?(console.log("error"),this.submitStatus="ERROR"):this.isUnique?(this.submitStatus="PENDING",this.createUniqueMovement(),setTimeout((function(){e.submitStatus="OK"}),500)):this.isUnique||(this.submitStatus="PENDING",this.createPeriodicMovement(),setTimeout((function(){e.submitStatus="OK"}),500))},createUniqueMovement:function(){var e={concept:this.movementConcept,amount:parseFloat(this.movementAmount),category:this.movementCategory,type:this.movementType,date:this.initialDate,comment:this.movementComment};this.addUniqueMovement(e),this.clear()},createPeriodicMovement:function(){var e={concept:this.movementConcept,amount:parseFloat(this.movementAmount),category:this.movementCategory,type:this.movementType,initialDate:this.initialDate,finalDate:this.finalDate,comment:this.movementComment,freq:this.movementFreq,freqUnit:this.freqUnit};if(this.addPeriodicMovement(e),this.initialDate===(new Date).toISOString().substr(0,10)){var t={concept:this.movementConcept,amount:parseFloat(this.movementAmount),category:this.movementCategory,type:this.movementType,date:this.initialDate,comment:this.movementComment};this.addUniqueMovement(t)}this.clear()},clear:function(){this.$v.$reset(),this.initialDate=(new Date).toISOString().substr(0,10),this.finalDate=null,this.movementConcept="",this.movementComment="",this.movementFreq=void 0,this.freqUnit="",this.movementAmount=void 0,this.movementType="Gasto",this.movementCategory=void 0,this.pressedG=!0,this.pressedI=!1,this.pressedU=!0,this.pressedP=!1,this.switchG(),this.switchU()},isInvalid:function(){var e=this.$v.movementConcept.$invalid||this.$v.movementAmount.$invalid||this.$v.movementCategory.$invalid||this.$v.movementType.$invalid||this.$v.initialDate.$invalid;return this.isUnique?e:e||this.$v.finalDate.$invalid||this.$v.movementFreq.$invalid||this.$v.freqUnit.$invalid}},Object(s["b"])(["addUniqueMovement","addPeriodicMovement"])),computed:{categories:function(){return"Gasto"===this.movementType?("Ingreso"==this.movementCategory&&(this.movementCategory=""),["Ocio","Servicios","Compras","Otro"]):(this.movementCategory="Ingresos",["Ingresos"])},conceptErrors:function(){var e=[];return this.$v.movementConcept.$dirty?(!this.$v.movementConcept.maxLength&&e.push("El concepto debe ocupar como máximo 20 caracteres."),!this.$v.movementConcept.required&&e.push("Campo requerido."),e):e},amountErrors:function(){var e=[];return this.$v.movementAmount.$dirty?(!this.$v.movementAmount.decimal&&e.push("El importe debe ser numérico."),!this.$v.movementAmount.required&&e.push("Campo requerido."),!this.$v.movementAmount.minAmount&&e.push("El importe debe ser superior a 0€."),!this.$v.movementAmount.twoDecimals&&e.push("El importe debe tener como máximo 2 decimales."),e):e},frequencyErrors:function(){var e=[];return this.isUnique?e:this.$v.movementFreq.$dirty?(!this.$v.movementFreq.integer&&e.push("La frecuencia debe ser un número natural"),!this.$v.movementFreq.required&&e.push("Campo requerido."),!this.$v.movementFreq.minFreq&&e.push("La frecuencia debe ser superior a 1."),e):e},categoryErrors:function(){var e=[];return this.$v.movementCategory.$dirty?(!this.$v.movementCategory.required&&e.push("Campo requerido."),e):e},typeErrors:function(){var e=[];return this.$v.movementType.$dirty?(!this.$v.movementType.required&&e.push("Campo requerido."),e):e},initialDateErrors:function(){var e=[];return this.$v.initialDate.$dirty?(!this.$v.initialDate.required&&e.push("Campo requerido."),e):e},finalDateErrors:function(){var e=[];return this.$v.finalDate.$dirty?(!this.$v.finalDate.isAfter&&e.push("La fecha de fin debe ser posterior a la de inicio."),e):e},freqUnitErrors:function(){var e=[];return this.isUnique?e:this.$v.freqUnit.$dirty?(!this.$v.freqUnit.required&&e.push("Campo requerido."),e):e}}},v=l,d=(i("9344"),i("2877")),h=i("6544"),p=i.n(h),f=i("8336"),g=i("b0af"),q=i("62ad"),b=i("a523"),C=i("2e4b"),y=i("4bd4"),x=i("132d"),$=i("adda"),U=i("e449"),D=i("0fd9"),w=i("b974"),I=i("8654"),k=i("a844"),A=Object(d["a"])(v,n,o,!1,null,"4bdc9097",null);t["default"]=A.exports;p()(A,{VBtn:f["a"],VCard:g["a"],VCol:q["a"],VContainer:b["a"],VDatePicker:C["a"],VForm:y["a"],VIcon:x["a"],VImg:$["a"],VMenu:U["a"],VRow:D["a"],VSelect:w["a"],VTextField:I["a"],VTextarea:k["a"]})},ef50:function(e,t,i){e.exports=i.p+"img/add_bg2.0b774bc0.png"}}]);
//# sourceMappingURL=chunk-39130460.c924f303.js.map