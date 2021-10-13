(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("cb077c36-66d0-44ae-b3e9-3f075fa1620f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cb077c36-66d0-44ae-b3e9-3f075fa1620f' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.0.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"5162b5c3-f3b1-4b28-9ff1-8ba2e3aae9bc":{"defs":[],"roots":{"references":[{"attributes":{"children":[[{"id":"20813"},0,0]]},"id":"20897","type":"GridBox"},{"attributes":{},"id":"20886","type":"UnionRenderers"},{"attributes":{},"id":"20830","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20863","type":"Line"},{"attributes":{},"id":"20820","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20850","type":"Circle"},{"attributes":{"tools":[{"id":"20830"},{"id":"20831"},{"id":"20832"},{"id":"20833"},{"id":"20834"},{"id":"20835"},{"id":"20836"},{"id":"20837"}]},"id":"20840","type":"Toolbar"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20858","type":"Line"},{"attributes":{"overlay":{"id":"20839"}},"id":"20834","type":"LassoSelectTool"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20864","type":"Line"},{"attributes":{},"id":"20889","type":"Selection"},{"attributes":{"source":{"id":"20867"}},"id":"20872","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"20855"},"glyph":{"id":"20856"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20858"},"nonselection_glyph":{"id":"20857"},"view":{"id":"20860"}},"id":"20859","type":"GlyphRenderer"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"20881"},"group":null,"major_label_policy":{"id":"20882"},"ticker":{"id":"20827"}},"id":"20826","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20857","type":"Line"},{"attributes":{},"id":"20890","type":"UnionRenderers"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20862","type":"Line"},{"attributes":{},"id":"20827","type":"BasicTicker"},{"attributes":{},"id":"20836","type":"SaveTool"},{"attributes":{"axis":{"id":"20822"},"coordinates":null,"group":null,"ticker":null},"id":"20825","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20893"},"selection_policy":{"id":"20892"}},"id":"20867","type":"ColumnDataSource"},{"attributes":{},"id":"20892","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"20898"},"toolbar_location":"above"},"id":"20899","type":"ToolbarBox"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20887"},"selection_policy":{"id":"20886"}},"id":"20849","type":"ColumnDataSource"},{"attributes":{"source":{"id":"20849"}},"id":"20854","type":"CDSView"},{"attributes":{"callback":null},"id":"20837","type":"HoverTool"},{"attributes":{},"id":"20884","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"20826"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20829","type":"Grid"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20838","type":"BoxAnnotation"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20856","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20889"},"selection_policy":{"id":"20888"}},"id":"20855","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"20838"}},"id":"20832","type":"BoxZoomTool"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"20853"},{"id":"20859"}]},"id":"20875","type":"LegendItem"},{"attributes":{},"id":"20831","type":"PanTool"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"20875"},{"id":"20876"}],"location":"center_right","orientation":"horizontal"},"id":"20874","type":"Legend"},{"attributes":{},"id":"20814","type":"DataRange1d"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"20884"},"group":null,"major_label_policy":{"id":"20885"},"ticker":{"id":"20823"}},"id":"20822","type":"LinearAxis"},{"attributes":{"children":[{"id":"20899"},{"id":"20897"}]},"id":"20900","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20851","type":"Circle"},{"attributes":{},"id":"20882","type":"AllLabels"},{"attributes":{},"id":"20823","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"20840"}],"tools":[{"id":"20830"},{"id":"20831"},{"id":"20832"},{"id":"20833"},{"id":"20834"},{"id":"20835"},{"id":"20836"},{"id":"20837"}]},"id":"20898","type":"ProxyToolbar"},{"attributes":{},"id":"20818","type":"LinearScale"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"20871"},{"id":"20865"}]},"id":"20876","type":"LegendItem"},{"attributes":{},"id":"20885","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20891"},"selection_policy":{"id":"20890"}},"id":"20861","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"20873","type":"Span"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20852","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"20877","type":"Title"},{"attributes":{},"id":"20833","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20867"},"glyph":{"id":"20868"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20870"},"nonselection_glyph":{"id":"20869"},"view":{"id":"20872"}},"id":"20871","type":"GlyphRenderer"},{"attributes":{},"id":"20888","type":"UnionRenderers"},{"attributes":{},"id":"20835","type":"UndoTool"},{"attributes":{},"id":"20816","type":"DataRange1d"},{"attributes":{},"id":"20891","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"20861"},"glyph":{"id":"20862"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20864"},"nonselection_glyph":{"id":"20863"},"view":{"id":"20866"}},"id":"20865","type":"GlyphRenderer"},{"attributes":{"above":[{"id":"20874"}],"below":[{"id":"20822"}],"center":[{"id":"20825"},{"id":"20829"}],"height":500,"left":[{"id":"20826"}],"output_backend":"webgl","renderers":[{"id":"20853"},{"id":"20859"},{"id":"20865"},{"id":"20871"},{"id":"20873"}],"title":{"id":"20877"},"toolbar":{"id":"20840"},"toolbar_location":null,"width":500,"x_range":{"id":"20814"},"x_scale":{"id":"20818"},"y_range":{"id":"20816"},"y_scale":{"id":"20820"}},"id":"20813","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20868","type":"Circle"},{"attributes":{},"id":"20887","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20870","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20869","type":"Circle"},{"attributes":{},"id":"20881","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20839","type":"PolyAnnotation"},{"attributes":{},"id":"20893","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"20849"},"glyph":{"id":"20850"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20852"},"nonselection_glyph":{"id":"20851"},"view":{"id":"20854"}},"id":"20853","type":"GlyphRenderer"},{"attributes":{"source":{"id":"20861"}},"id":"20866","type":"CDSView"},{"attributes":{"source":{"id":"20855"}},"id":"20860","type":"CDSView"}],"root_ids":["20900"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"5162b5c3-f3b1-4b28-9ff1-8ba2e3aae9bc","root_ids":["20900"],"roots":{"20900":"cb077c36-66d0-44ae-b3e9-3f075fa1620f"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();