(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["096kYLtF"],{"-kFUcM_K":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return h;}});var o=a("d3__vuQ2"),r=a("hSu6qSb4"),l=a("9lWhVE4R"),i=r._(a("NIchKEYm")),s=a("zvFlsDim"),n=o._(a("blQDwOwN")),c=a("qnhnku1T"),m=a("TEToLbmk");let A=(0,s.createStyles)(({token:e})=>({image:(0,s.css)`
    transition: all ${e.motionDurationSlow};
    position: absolute;
    inset-inline-start: 0;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: right top;
  `})),d=()=>({opacity:1}),u=()=>({opacity:0});var h=({colorPrimary:e,isLight:t})=>{let a=(0,i.useMemo)(()=>(0,m.getClosetColor)(e),[e]),{styles:o}=A(),[r,s]=(0,i.useState)([]);return i.default.useLayoutEffect(()=>{s([a]);},[a]),(0,l.jsx)(c.CSSMotionList,{keys:r,motionName:"transition",onEnterStart:u,onAppearStart:u,onEnterActive:d,onAppearActive:d,onLeaveStart:d,onLeaveActive:u,motionDeadline:500,children:({key:e,className:a,style:r})=>{let i=(0,n.default)(o.image,a),s=m.COLOR_IMAGES.find(t=>t.color===e);if(!s||!s.url)return null;let{opacity:c}=r||{};return(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:s.webp,type:"image/webp"}),(0,l.jsx)("source",{srcSet:s.url,type:"image/jpeg"}),(0,l.jsx)("img",{draggable:!1,className:i,style:{...r,opacity:t?c:0},src:s.url,alt:"bg"})]});}});};},"096kYLtF":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return N;}});var o=a("d3__vuQ2"),r=a("hSu6qSb4"),l=a("9lWhVE4R"),i=r._(a("NIchKEYm")),s=a("ogtpOyrQ"),n=a("dXftLIYJ"),c=a("TMZOm5mI"),m=a("B-i5_7B2"),A=a("zvFlsDim"),d=a("xXE_J8ab"),u=o._(a("blQDwOwN")),h=a("fSTtFmFO"),p=o._(a("-q2bFsFL")),g=o._(a("uU7Mc6fw")),b=o._(a("e6i6Xb5L")),f=o._(a("XT_r0qqK")),x=a("b9y_pYpu"),y=o._(a("1yDomKSg")),j=a("tCq2wYtB"),v=o._(a("-kFUcM_K")),w=o._(a("fKC0JqFq")),_=a("TEToLbmk"),C=o._(a("nH0xiyov")),k=o._(a("cOiJuiZw")),D=o._(a("77Et6kwa"));let{Header:T,Content:F,Sider:S}=m.Layout,R=()=>null,L={cn:{themeTitle:"\u5B9A\u5236\u4E3B\u9898\uFF0C\u968F\u5FC3\u6240\u6B32",themeDesc:"Ant Design 5.0 \u5F00\u653E\u66F4\u591A\u6837\u5F0F\u7B97\u6CD5\uFF0C\u8BA9\u4F60\u5B9A\u5236\u4E3B\u9898\u66F4\u7B80\u5355",customizeTheme:"\u5B9A\u5236\u4E3B\u9898",myTheme:"\u6211\u7684\u4E3B\u9898",titlePrimaryColor:"\u4E3B\u8272",titleBorderRadius:"\u5706\u89D2",titleCompact:"\u5BBD\u677E\u5EA6",default:"\u9ED8\u8BA4",compact:"\u7D27\u51D1",titleTheme:"\u4E3B\u9898",light:"\u4EAE\u8272",dark:"\u6697\u9ED1",toDef:"\u6DF1\u5EA6\u5B9A\u5236",toUse:"\u53BB\u4F7F\u7528"},en:{themeTitle:"Flexible theme customization",themeDesc:"Ant Design 5.0 enable extendable algorithm, make custom theme easier",customizeTheme:"Customize Theme",myTheme:"My Theme",titlePrimaryColor:"Primary Color",titleBorderRadius:"Border Radius",titleCompact:"Compact",titleTheme:"Theme",default:"Default",compact:"Compact",light:"Light",dark:"Dark",toDef:"More",toUse:"Apply"}},E=(0,A.createStyles)(({token:e,css:t,cx:a})=>{let{carousel:o}=(0,j.getCarouselStyle)(),r=t`
    overflow: hidden;
    background: rgba(240, 242, 245, 0.25);
    backdrop-filter: blur(50px);
    box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.1);
    transition: all ${e.motionDurationSlow};
  `;return{demo:r,otherDemo:t`
      &.${a(r)} {
        backdrop-filter: blur(10px);
        background: rgba(247, 247, 247, 0.5);
      }
    `,darkDemo:t`
      &.${a(r)} {
        background: #000;
      }
    `,larkDemo:t`
      &.${a(r)} {
        // background: #f7f7f7;
        background: rgba(240, 242, 245, 0.65);
      }
    `,comicDemo:t`
      &.${a(r)} {
        // background: #ffe4e6;
        background: rgba(240, 242, 245, 0.65);
      }
    `,menu:t`
      margin-inline-start: auto;
    `,header:t`
      display: flex;
      align-items: center;
      border-bottom: 1px solid ${e.colorSplit};
      padding-inline: ${e.paddingLG}px !important;
      height: ${1.2*e.controlHeightLG}px;
      line-height: ${1.2*e.controlHeightLG}px;
    `,headerDark:t`
      border-bottom-color: rgba(255, 255, 255, 0.1);
    `,avatar:t`
      width: ${e.controlHeight}px;
      height: ${e.controlHeight}px;
      border-radius: 100%;
      background: rgba(240, 240, 240, 0.75);
      background-size: cover;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    `,avatarDark:t`
      background: rgba(200, 200, 200, 0.3);
    `,logo:t`
      display: flex;
      align-items: center;
      column-gap: ${e.padding}px;

      h1 {
        font-weight: 400;
        font-size: ${e.fontSizeLG}px;
        line-height: 1.5;
      }
    `,logoImg:t`
      width: 30px;
      height: 30px;
      overflow: hidden;

      img {
        width: 30px;
        height: 30px;
        vertical-align: top;
      }
    `,transBg:t`
      background: transparent !important;
    `,form:t`
      width: 100%;
      margin: 0 auto;
    `,pos:t`
      position: absolute;
    `,leftTopImagePos:t`
      inset-inline-start: 0;
      top: -100px;
      height: 500px;
    `,rightBottomPos:t`
      inset-inline-end: 0;
      bottom: -100px;
      height: 287px;
    `,leftTopImage:t`
      inset-inline-start: 50%;
      transform: translate3d(-900px, 0, 0);
      top: -100px;
      height: 500px;
    `,rightBottomImage:t`
      inset-inline-end: 50%;
      transform: translate3d(750px, 0, 0);
      bottom: -100px;
      height: 287px;
    `,motion:t`
      transition: all ${e.motionDurationSlow};
    `,op1:t`
      opacity: 1;
    `,op0:t`
      opacity: 0;
    `,carousel:o};}),Q=[{key:"Design Values",label:"Design Values"},{key:"Global Styles",label:"Global Styles"},{key:"Themes",label:"Themes"},{key:"DesignPatterns",label:"Design Patterns"}],O=[{key:"Design",label:"Design",icon:(0,l.jsx)(n.FolderOutlined,{}),children:Q},{key:"Development",label:"Development",icon:(0,l.jsx)(n.FolderOutlined,{})}],B={themeType:"default",colorPrimary:"#1677FF",borderRadius:6,compact:"default"},M={default:{},dark:{borderRadius:2},lark:{colorPrimary:"#00B96B",borderRadius:4},comic:{colorPrimary:_.PINK_COLOR,borderRadius:16},v4:{...s.defaultTheme.token}},P=e=>e/255;var N=()=>{let{styles:e}=E(),[t,a]=(0,g.default)(L),o="cn"===a,{search:r}=(0,h.useLocation)(),[A,j]=i.useState(B),N=(e,t)=>{i.startTransition(()=>{j({...M[t.themeType],...t});});},{compact:I,themeType:$,colorPrimary:z,...J}=A,H="dark"!==$,[q]=m.Form.useForm(),{isMobile:K}=i.useContext(f.default),G=i.useMemo(()=>"string"==typeof z?z:z.toHexString(),[z]),U=i.useMemo(()=>{let e=[H?m.theme.defaultAlgorithm:m.theme.darkAlgorithm];return"compact"===I&&e.push(m.theme.compactAlgorithm),"v4"===$&&e.push(s.defaultAlgorithm),e;},[H,I,$]);i.useEffect(()=>{let e={...B,themeType:$,...M[$]};j(e),q.setFieldsValue(e);},[$]);let V=(0,p.default)();i.useEffect(()=>{N({},{...A,themeType:V?"dark":"default"});},[V]);let X=(0,_.getClosetColor)(G),[Y,W]=i.useMemo(()=>{let e=m.theme.defaultAlgorithm({...m.theme.defaultConfig.token,colorPrimary:G});return["dark"===$?"#393F4A":X===_.DEFAULT_COLOR?"#F5F8FF":e.colorPrimaryHover,e.colorPrimaryBgHover];},[$,X,G]),Z=i.useMemo(()=>{let e=(0,d.generateColor)(G).toHsb();return e.b=Math.min(e.b,.7),(0,d.generateColor)(e).toHexString();},[G]),ee=i.useMemo(()=>({token:{...J,colorPrimary:G},algorithm:U,components:{Layout:H?{headerBg:"transparent",bodyBg:"transparent"}:{},Menu:H?{itemBg:"transparent",subMenuItemBg:"transparent",activeBarBorderWidth:0}:{},..."v4"===$?s.defaultTheme.components:{}}}),[J,G,U,$]),et=(0,l.jsxs)(m.ConfigProvider,{theme:ee,children:[(0,l.jsx)(R,{}),(0,l.jsx)("div",{className:(0,u.default)(e.demo,{[e.otherDemo]:H&&X!==_.DEFAULT_COLOR&&e.otherDemo,[e.darkDemo]:!H}),style:{borderRadius:A.borderRadius},children:(0,l.jsxs)(m.Layout,{className:e.transBg,children:[(0,l.jsxs)(T,{className:(0,u.default)(e.header,e.transBg,!H&&e.headerDark),children:[(0,l.jsxs)("div",{className:e.logo,children:[(0,l.jsx)("div",{className:e.logoImg,children:(0,l.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",style:{filter:X===_.DEFAULT_COLOR?void 0:function(e){let t=new c.TinyColor(e).toRgb(),{r:a,g:o,b:r}=t,l=100*P(a),i=1e4*Math.max(P(a),P(o),P(r)),s=(180*Math.atan2(Math.sqrt(3)*(P(o)-P(r)),2*P(a)-P(o)-P(r))/Math.PI+360)%360;return`invert(${l}%) sepia(100%) saturate(${i}%) hue-rotate(${s}deg)`;}(Z)},alt:"antd logo"})}),(0,l.jsx)("h1",{children:"Ant Design 5.0"})]}),(0,l.jsxs)(m.Flex,{className:e.menu,gap:"middle",children:[(0,l.jsx)(n.BellOutlined,{}),(0,l.jsx)(n.QuestionCircleOutlined,{}),(0,l.jsx)("div",{className:(0,u.default)(e.avatar,{[e.avatarDark]:"dark"===$}),style:{backgroundColor:W,backgroundImage:`url(${(0,_.getAvatarURL)(X)})`}})]})]}),(0,l.jsxs)(m.Layout,{className:e.transBg,hasSider:!0,children:[(0,l.jsx)(S,{className:(0,u.default)(e.transBg),width:200,children:(0,l.jsx)(m.Menu,{mode:"inline",className:(0,u.default)(e.transBg),selectedKeys:["Themes"],openKeys:["Design"],style:{height:"100%",borderRight:0},items:O,expandIcon:!1})}),(0,l.jsxs)(m.Layout,{className:e.transBg,style:{padding:"0 24px 24px"},children:[(0,l.jsx)(m.Breadcrumb,{style:{margin:"16px 0"},items:[{title:(0,l.jsx)(n.HomeOutlined,{})},{title:"Design",menu:{items:Q}},{title:"Themes"}]}),(0,l.jsxs)(F,{children:[(0,l.jsx)(m.Typography.Title,{level:2,children:t.customizeTheme}),(0,l.jsx)(m.Card,{title:t.myTheme,extra:(0,l.jsxs)(m.Flex,{gap:"small",children:[(0,l.jsx)(b.default,{to:(0,x.getLocalizedPathname)("/theme-editor",o,r),children:t.toDef}),(0,l.jsx)(b.default,{type:"primary",to:(0,x.getLocalizedPathname)("/docs/react/customize-theme",o,r),children:t.toUse})]}),children:(0,l.jsxs)(m.Form,{form:q,initialValues:A,onValuesChange:N,labelCol:{span:3},wrapperCol:{span:21},className:e.form,children:[(0,l.jsx)(m.Form.Item,{label:t.titleTheme,name:"themeType",children:(0,l.jsx)(D.default,{})}),(0,l.jsx)(m.Form.Item,{label:t.titlePrimaryColor,name:"colorPrimary",children:(0,l.jsx)(w.default,{})}),(0,l.jsx)(m.Form.Item,{label:t.titleBorderRadius,name:"borderRadius",children:(0,l.jsx)(k.default,{})}),(0,l.jsx)(m.Form.Item,{label:t.titleCompact,name:"compact",htmlFor:"compact_default",children:(0,l.jsx)(m.Radio.Group,{options:[{label:t.default,value:"default",id:"compact_default"},{label:t.compact,value:"compact"}]})})]})})]})]})]})]})})]});return K?(0,l.jsx)(C.default,{title:t.themeTitle,description:t.themeDesc,id:"flexible"}):(0,l.jsx)(y.default,{title:t.themeTitle,titleColor:function(e,t){if(!t)return"#FFF";let a=(0,d.generateColor)(e),o=(0,_.getClosetColor)(e);switch(o){case _.DEFAULT_COLOR:case _.PINK_COLOR:case"#F2BD27":return;case"#5A54F9":case"#E0282E":return"#FFF";default:return a.toHsb().b<.7?"#FFF":void 0;}}(G,H),description:t.themeDesc,id:"flexible",background:Y,decoration:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:(0,u.default)(e.motion,H&&X===_.DEFAULT_COLOR?e.op1:e.op0),children:[(0,l.jsx)("img",{className:(0,u.default)(e.pos,e.leftTopImage),src:"https://gw.alipayobjects.com/zos/bmw-prod/bd71b0c6-f93a-4e52-9c8a-f01a9b8fe22b.svg",alt:""}),(0,l.jsx)("img",{className:(0,u.default)(e.pos,e.rightBottomImage),src:"https://gw.alipayobjects.com/zos/bmw-prod/84ad805a-74cb-4916-b7ba-9cdc2bdec23a.svg",alt:""})]}),(0,l.jsxs)("div",{className:(0,u.default)(e.motion,H&&X?e.op0:e.op1),children:[(0,l.jsx)("img",{className:(0,u.default)(e.pos,e.leftTopImagePos),src:"https://gw.alipayobjects.com/zos/bmw-prod/a213184a-f212-4afb-beec-1e8b36bb4b8a.svg",alt:""}),(0,l.jsx)("img",{className:(0,u.default)(e.pos,e.rightBottomPos),src:"https://gw.alipayobjects.com/zos/bmw-prod/bb74a2fb-bff1-4d0d-8c2d-2ade0cd9bb0d.svg",alt:""})]}),(0,l.jsx)(v.default,{isLight:H,colorPrimary:G})]}),children:et});};},"77Et6kwa":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.e(t,{THEMES:function(){return c;},default:function(){return d;}});var o=a("d3__vuQ2"),r=a("9lWhVE4R"),l=a("B-i5_7B2"),i=a("zvFlsDim"),s=o._(a("blQDwOwN")),n=o._(a("uU7Mc6fw"));let c={default:"https://gw.alipayobjects.com/zos/bmw-prod/ae669a89-0c65-46db-b14b-72d1c7dd46d6.svg",dark:"https://gw.alipayobjects.com/zos/bmw-prod/0f93c777-5320-446b-9bb7-4d4b499f346d.svg",lark:"https://gw.alipayobjects.com/zos/bmw-prod/3e899b2b-4eb4-4771-a7fc-14c7ff078aed.svg",comic:"https://gw.alipayobjects.com/zos/bmw-prod/ed9b04e8-9b8d-4945-8f8a-c8fc025e846f.svg",v4:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*bOiWT4-34jkAAAAAAAAAAAAADrJ8AQ/original"},m={cn:{default:"\u9ED8\u8BA4",dark:"\u6697\u9ED1",lark:"\u77E5\u8BC6\u534F\u4F5C",comic:"\u6843\u82B1\u7F18",v4:"V4 \u4E3B\u9898"},en:{default:"Default",dark:"Dark",lark:"Document",comic:"Blossom",v4:"V4 Theme"}},A=(0,i.createStyles)(({token:e,css:t})=>({themeCard:t`
    border-radius: ${e.borderRadius}px;
    cursor: pointer;
    transition: all ${e.motionDurationSlow};
    overflow: hidden;
    display: inline-block;

    & > input[type='radio'] {
      width: 0;
      height: 0;
      opacity: 0;
      position: absolute;
    }

    img {
      vertical-align: top;
      box-shadow:
        0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 6px 16px 0 rgba(0, 0, 0, 0.08),
        0 9px 28px 8px rgba(0, 0, 0, 0.05);
    }

    &:focus-within,
    &:hover {
      transform: scale(1.04);
    }
  `,themeCardActive:t`
    box-shadow:
      0 0 0 1px ${e.colorBgContainer},
      0 0 0 ${2*e.controlOutlineWidth+1}px ${e.colorPrimary};
    &,
    &:hover:not(:focus-within) {
      transform: scale(1);
    }
  `}));var d=e=>{let{value:t,id:a,onChange:o}=e,{styles:i}=A(),[d]=(0,n.default)(m);return(0,r.jsx)(l.Flex,{gap:"large",wrap:!0,children:Object.keys(c).map((e,n)=>(0,r.jsxs)(l.Flex,{vertical:!0,gap:"small",justify:"center",align:"center",children:[(0,r.jsxs)("label",{onClick:()=>null==o?void 0:o(e),className:(0,s.default)(i.themeCard,{[i.themeCardActive]:t===e}),children:[(0,r.jsx)("input",{type:"radio",name:"theme",id:0===n?a:void 0}),(0,r.jsx)("img",{src:c[e],alt:e})]}),(0,r.jsx)("span",{children:d[e]})]},e))});};},TEToLbmk:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.e(t,{COLOR_IMAGES:function(){return i;},DEFAULT_COLOR:function(){return r;},PINK_COLOR:function(){return l;},PRESET_COLORS:function(){return s;},getAvatarURL:function(){return c;},getClosetColor:function(){return n;}});var o=a("xXE_J8ab");let r="#1677FF",l="#ED4192",i=[{color:r,url:null,webp:null},{color:"#5A54F9",url:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*H8nRT7_q0EwAAAAAAAAAAAAADrJ8AQ/original",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*H8nRT7_q0EwAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#9E339F",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*FMluR4vJhaQAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*CMCMTKV51tIAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:l,url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*DGZXS4YOGp0AAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*s5OdR6wZZIkAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#E0282E",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*w6xcR7MriwEAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HE_4Qp_XfQQAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#F4801A",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*VWFOTbEyU9wAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xTG2QbottAQAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#F2BD27",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1yydQLzw5nYAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*hbPfSbF-xPIAAAAAAAAAAAAADrJ8AQ/fmt.webp"},{color:"#00B96B",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*XpGeRoZKGycAAAAAAAAAAAAAARQnAQ",webp:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*iM6CQ496P3oAAAAAAAAAAAAADrJ8AQ/fmt.webp"}],s=i.map(({color:e})=>e);function n(e){if(!e)return null;let t=(0,o.generateColor)(e).toRgb(),a=i.map(({color:e})=>{let a=(0,o.generateColor)(e).toRgb(),r=Math.sqrt((a.r-t.r)**2+(a.g-t.g)**2+(a.b-t.b)**2);return{color:e,dist:r};}),r=a.sort((e,t)=>e.dist-t.dist)[0];return r.dist<=33?r.color:null;}function c(e){var t;let a=n(e);return a?(null===(t=i.find(e=>e.color===a))||void 0===t?void 0:t.url)||"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*CLp0Qqc11AkAAAAAAAAAAAAAARQnAQ":null;}},cOiJuiZw:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return l;}});var o=a("9lWhVE4R"),r=a("B-i5_7B2"),l=({id:e,value:t,onChange:a})=>(0,o.jsxs)(r.Flex,{gap:"large",children:[(0,o.jsx)(r.InputNumber,{value:t,onChange:a,style:{width:120},min:0,formatter:e=>`${e}px`,parser:e=>null==e?void 0:e.replace("px",""),id:e}),(0,o.jsx)(r.Slider,{tooltip:{open:!1},style:{width:128},min:0,value:t,max:20,onChange:a})]});},fKC0JqFq:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return h;}});var o=a("d3__vuQ2"),r=a("hSu6qSb4"),l=a("9lWhVE4R"),i=r._(a("NIchKEYm")),s=a("B-i5_7B2"),n=a("zvFlsDim"),c=a("xXE_J8ab"),m=o._(a("blQDwOwN")),A=a("TEToLbmk");let d=(0,n.createStyles)(({token:e,css:t})=>({color:t`
    width: ${e.controlHeightLG/2}px;
    height: ${e.controlHeightLG/2}px;
    border-radius: 100%;
    cursor: pointer;
    transition: all ${e.motionDurationFast};
    display: inline-block;

    & > input[type='radio'] {
      width: 0;
      height: 0;
      opacity: 0;
    }

    &:focus-within {
      // need ？
    }
  `,colorActive:t`
    box-shadow:
      0 0 0 1px ${e.colorBgContainer},
      0 0 0 ${2*e.controlOutlineWidth+1}px ${e.colorPrimary};
  `})),u=e=>{let{value:t,children:a,onChange:o}=e,[r,n]=(0,i.useState)(t);return(0,i.useEffect)(()=>{let e=setTimeout(()=>{null==o||o(r);},200);return()=>clearTimeout(e);},[r]),(0,i.useEffect)(()=>{n(t);},[t]),(0,l.jsx)(s.ColorPicker,{value:r,onChange:n,presets:[{label:"PresetColors",colors:A.PRESET_COLORS}],children:a});};var h=({value:e,onChange:t,id:a})=>{let{styles:o}=d(),r=i.default.useMemo(()=>{let t=(0,c.generateColor)(e||"").toRgbString(),a=!1,o=A.PRESET_COLORS.map(e=>{let o=(0,c.generateColor)(e).toRgbString(),r=o===t;return a=a||r,{color:e,active:r,picker:!1};});return[...o,{color:"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",picker:!0,active:!a}];},[e]);return(0,l.jsxs)(s.Flex,{gap:"large",align:"center",wrap:!0,children:[(0,l.jsx)(s.Input,{value:"string"==typeof e?e:null==e?void 0:e.toHexString(),onChange:e=>null==t?void 0:t(e.target.value),style:{width:120},id:a}),(0,l.jsx)(s.Flex,{gap:"middle",children:r.map(({color:a,active:r,picker:i})=>{let s=(0,l.jsx)("label",{className:(0,m.default)(o.color,{[o.colorActive]:r}),style:{background:a},onClick:()=>{i||null==t||t(a);},children:(0,l.jsx)("input",{type:"radio",name:i?"picker":"color","aria-label":a,tabIndex:i?-1:0,onClick:e=>e.stopPropagation()})},a);return i?(0,l.jsx)(u,{value:e||"",onChange:t,children:s},`colorpicker-${e}`):s;})})]});};},nH0xiyov:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return m;}});var o=a("9lWhVE4R"),r=a("NIchKEYm"),l=a("B-i5_7B2"),i=a("zvFlsDim"),s=a("tCq2wYtB");let n=(0,i.createStyles)(()=>{let{carousel:e}=(0,s.getCarouselStyle)();return{carousel:e,container:(0,i.css)`
      position: relative;
    `,title:(0,i.css)`
      position: absolute;
      top: 15%;
      z-index: 1;
      width: 100%;
      text-align: center;
    `,img:(0,i.css)`
      width: 100%;
    `};}),c=[{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KsMrRZaciFcAAAAAAAAAAAAADrJ8AQ/original",titleColor:"rgba(0,0,0,.88)"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*3FkqR6XRNgoAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cSX_RbD3k9wAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*MldsRZeax6EAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xCAmSL0xlZ8AAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*vCfCSbiI_VIAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xCAmSL0xlZ8AAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BeDBTY9UnXIAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"},{imageSrc:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Q63XTbk8YaMAAAAAAAAAAAAADrJ8AQ/original",titleColor:"#fff"}];var m=e=>{let{styles:t}=n(),{id:a,title:s,description:m}=e,A=(0,i.useTheme)(),[d,u]=(0,r.useState)(0);return(0,o.jsxs)("div",{className:t.container,children:[(0,o.jsxs)("div",{className:t.title,children:[(0,o.jsx)(l.Typography.Title,{id:a,level:1,style:{fontWeight:900,color:c[d].titleColor,fontFamily:`AliPuHui, ${A.fontFamily}`,fontSize:A.fontSizeHeading2},children:s}),(0,o.jsx)(l.Typography.Paragraph,{style:{marginBottom:A.marginXXL,color:c[d].titleColor},children:m})]}),(0,o.jsx)(l.Carousel,{className:t.carousel,afterChange:u,children:c.map((e,a)=>(0,o.jsx)("div",{children:(0,o.jsx)("img",{draggable:!1,src:e.imageSrc,className:t.img,alt:"carousel"})},a))})]});};}}]);
//# sourceMappingURL=096kYLtF-async.5a345a36.js.map