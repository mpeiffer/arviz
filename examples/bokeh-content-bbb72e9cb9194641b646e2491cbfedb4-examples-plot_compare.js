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
    
      
      
    
      const element = document.getElementById("5887daf3-67eb-4451-b9a2-93cc7b63accc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5887daf3-67eb-4451-b9a2-93cc7b63accc' but no matching script tag was found.")
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
                    
                  const docs_json = '{"09752caf-c6a6-42af-83b1-01a4b2e20826":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18031","type":"ResetTool"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18088"},"group":null,"major_label_policy":{"id":"18089"},"ticker":{"id":"18024"}},"id":"18023","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18039","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18055","type":"Scatter"},{"attributes":{},"id":"18093","type":"Selection"},{"attributes":{"callback":null},"id":"18038","type":"HoverTool"},{"attributes":{"data":{"x":{"__ndarray__":"KQWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18091"},"selection_policy":{"id":"18090"}},"id":"18052","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18099"},"selection_policy":{"id":"18098"}},"id":"18076","type":"ColumnDataSource"},{"attributes":{},"id":"18094","type":"UnionRenderers"},{"attributes":{},"id":"18097","type":"Selection"},{"attributes":{"coordinates":null,"group":null},"id":"18083","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18072","type":"MultiLine"},{"attributes":{},"id":"18096","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18053","type":"Scatter"},{"attributes":{"source":{"id":"18064"}},"id":"18069","type":"CDSView"},{"attributes":{"source":{"id":"18076"}},"id":"18081","type":"CDSView"},{"attributes":{"source":{"id":"18058"}},"id":"18063","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18066","type":"Circle"},{"attributes":{"end":0.5,"start":-1.5},"id":"18017","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"18076"},"glyph":{"id":"18077"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18079"},"nonselection_glyph":{"id":"18078"},"view":{"id":"18081"}},"id":"18080","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"18027"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18030","type":"Grid"},{"attributes":{"toolbars":[{"id":"18041"}],"tools":[{"id":"18031"},{"id":"18032"},{"id":"18033"},{"id":"18034"},{"id":"18035"},{"id":"18036"},{"id":"18037"},{"id":"18038"}]},"id":"18104","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"18070"},"glyph":{"id":"18071"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18073"},"nonselection_glyph":{"id":"18072"},"view":{"id":"18075"}},"id":"18074","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18040","type":"PolyAnnotation"},{"attributes":{},"id":"18019","type":"LinearScale"},{"attributes":{"children":[{"id":"18105"},{"id":"18103"}]},"id":"18106","type":"Column"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"18082","type":"Span"},{"attributes":{},"id":"18021","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"18058"},"glyph":{"id":"18059"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18061"},"nonselection_glyph":{"id":"18060"},"view":{"id":"18063"}},"id":"18062","type":"GlyphRenderer"},{"attributes":{},"id":"18015","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"18104"},"toolbar_location":"above"},"id":"18105","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"18040"}},"id":"18035","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"data_source":{"id":"18064"},"glyph":{"id":"18065"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18067"},"nonselection_glyph":{"id":"18066"},"view":{"id":"18069"}},"id":"18068","type":"GlyphRenderer"},{"attributes":{"data":{"xs":[[-30.896420573800544,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18093"},"selection_policy":{"id":"18092"}},"id":"18058","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18078","type":"Circle"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18071","type":"MultiLine"},{"attributes":{},"id":"18098","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18067","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsApBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18095"},"selection_policy":{"id":"18094"}},"id":"18064","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18054","type":"Scatter"},{"attributes":{},"id":"18037","type":"SaveTool"},{"attributes":{},"id":"18034","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18065","type":"Circle"},{"attributes":{},"id":"18091","type":"Selection"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18073","type":"MultiLine"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18079","type":"Circle"},{"attributes":{"source":{"id":"18052"}},"id":"18057","type":"CDSView"},{"attributes":{"source":{"id":"18070"}},"id":"18075","type":"CDSView"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18050","type":"FixedTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"18052"},"glyph":{"id":"18053"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18055"},"nonselection_glyph":{"id":"18054"},"view":{"id":"18057"}},"id":"18056","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"18039"}},"id":"18033","type":"BoxZoomTool"},{"attributes":{"tools":[{"id":"18031"},{"id":"18032"},{"id":"18033"},{"id":"18034"},{"id":"18035"},{"id":"18036"},{"id":"18037"},{"id":"18038"}]},"id":"18041","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18061","type":"MultiLine"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18059","type":"MultiLine"},{"attributes":{},"id":"18089","type":"AllLabels"},{"attributes":{},"id":"18032","type":"PanTool"},{"attributes":{},"id":"18095","type":"Selection"},{"attributes":{"axis":{"id":"18023"},"coordinates":null,"group":null,"ticker":null},"id":"18026","type":"Grid"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.383537134836743]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18097"},"selection_policy":{"id":"18096"}},"id":"18070","type":"ColumnDataSource"},{"attributes":{},"id":"18092","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18077","type":"Circle"},{"attributes":{"coordinates":null,"formatter":{"id":"18085"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18086"},"ticker":{"id":"18050"}},"id":"18027","type":"LinearAxis"},{"attributes":{"below":[{"id":"18023"}],"center":[{"id":"18026"},{"id":"18030"}],"height":500,"left":[{"id":"18027"}],"output_backend":"webgl","renderers":[{"id":"18056"},{"id":"18062"},{"id":"18068"},{"id":"18074"},{"id":"18080"},{"id":"18082"}],"title":{"id":"18083"},"toolbar":{"id":"18041"},"toolbar_location":null,"width":500,"x_range":{"id":"18015"},"x_scale":{"id":"18019"},"y_range":{"id":"18017"},"y_scale":{"id":"18021"}},"id":"18014","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18036","type":"UndoTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18060","type":"MultiLine"},{"attributes":{},"id":"18099","type":"Selection"},{"attributes":{},"id":"18086","type":"AllLabels"},{"attributes":{},"id":"18024","type":"BasicTicker"},{"attributes":{},"id":"18088","type":"BasicTickFormatter"},{"attributes":{},"id":"18090","type":"UnionRenderers"},{"attributes":{},"id":"18085","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"18014"},0,0]]},"id":"18103","type":"GridBox"}],"root_ids":["18106"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"09752caf-c6a6-42af-83b1-01a4b2e20826","root_ids":["18106"],"roots":{"18106":"5887daf3-67eb-4451-b9a2-93cc7b63accc"}}];
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