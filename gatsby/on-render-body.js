"use strict";

const React = require("react");
const siteConfig = require("../config.js");

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
const katexStylesheet = require("!css-loader!../static/css/katex/katex.min.css");

const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  const { useKatex } = siteConfig;

  if (useKatex) {
    setHeadComponents([
      React.createElement("style", {
        key: "katex-inline-stylesheet",
        dangerouslySetInnerHTML: { __html: katexStylesheet.toString() },
      }),
    ]);
  }

  setPostBodyComponents([
    <script
      key="visa"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `(function(v,i,s,a,t){v[t]=v[t]||function(){(v[t].v=v[t].v||[]).push(arguments)};if(!v._visaSettings){v._visaSettings={}}v._visaSettings[a]={v:'1.0',s:a,a:'1',t:t};var b=i.getElementsByTagName('body')[0];var p=i.createElement('script');p.defer=1;p.async=1;p.src=s+'?s='+a;b.appendChild(p)})(window,document,'//dev-worker.va-endpoint.com/main.js','5cd81ee6-d5d8-11ec-9c03-0242ac130005','va')`,
      }}
    />,
  ]);
};

module.exports = onRenderBody;
