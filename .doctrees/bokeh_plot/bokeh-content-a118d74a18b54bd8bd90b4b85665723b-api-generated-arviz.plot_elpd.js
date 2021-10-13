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
    
      
      
    
      const element = document.getElementById("8e2fd57e-945c-480a-819a-98a613d53c4b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8e2fd57e-945c-480a-819a-98a613d53c4b' but no matching script tag was found.")
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
                    
                  const docs_json = '{"8bbcb9b3-49ad-42d9-b987-5929e2a312db":{"defs":[],"roots":{"references":[{"attributes":{"children":[{"id":"17275"},{"id":"17273"}]},"id":"17276","type":"Column"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17259","type":"Title"},{"attributes":{},"id":"17269","type":"Selection"},{"attributes":{"callback":null},"id":"17243","type":"HoverTool"},{"attributes":{},"id":"17226","type":"LinearScale"},{"attributes":{"axis":{"id":"17232"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17235","type":"Grid"},{"attributes":{},"id":"17266","type":"BasicTickFormatter"},{"attributes":{},"id":"17267","type":"AllLabels"},{"attributes":{"overlay":{"id":"17244"}},"id":"17238","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"formatter":{"id":"17266"},"group":null,"major_label_policy":{"id":"17267"},"ticker":{"id":"17229"}},"id":"17228","type":"LinearAxis"},{"attributes":{"overlay":{"id":"17245"}},"id":"17240","type":"LassoSelectTool"},{"attributes":{},"id":"17241","type":"UndoTool"},{"attributes":{},"id":"17224","type":"LinearScale"},{"attributes":{},"id":"17237","type":"PanTool"},{"attributes":{},"id":"17220","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17244","type":"BoxAnnotation"},{"attributes":{},"id":"17236","type":"ResetTool"},{"attributes":{"below":[{"id":"17228"}],"center":[{"id":"17231"},{"id":"17235"}],"height":288,"left":[{"id":"17232"}],"output_backend":"webgl","renderers":[{"id":"17257"}],"title":{"id":"17259"},"toolbar":{"id":"17246"},"toolbar_location":null,"width":432,"x_range":{"id":"17220"},"x_scale":{"id":"17224"},"y_range":{"id":"17222"},"y_scale":{"id":"17226"}},"id":"17219","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17245","type":"PolyAnnotation"},{"attributes":{},"id":"17229","type":"BasicTicker"},{"attributes":{},"id":"17268","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"17274"},"toolbar_location":"above"},"id":"17275","type":"ToolbarBox"},{"attributes":{"tools":[{"id":"17236"},{"id":"17237"},{"id":"17238"},{"id":"17239"},{"id":"17240"},{"id":"17241"},{"id":"17242"},{"id":"17243"}]},"id":"17246","type":"Toolbar"},{"attributes":{},"id":"17263","type":"BasicTickFormatter"},{"attributes":{},"id":"17233","type":"BasicTicker"},{"attributes":{},"id":"17242","type":"SaveTool"},{"attributes":{"coordinates":null,"data_source":{"id":"17256"},"glyph":{"id":"17255"},"group":null,"hover_glyph":null,"view":{"id":"17258"}},"id":"17257","type":"GlyphRenderer"},{"attributes":{},"id":"17222","type":"DataRange1d"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17263"},"group":null,"major_label_policy":{"id":"17264"},"ticker":{"id":"17233"}},"id":"17232","type":"LinearAxis"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17269"},"selection_policy":{"id":"17268"}},"id":"17256","type":"ColumnDataSource"},{"attributes":{},"id":"17239","type":"WheelZoomTool"},{"attributes":{"source":{"id":"17256"}},"id":"17258","type":"CDSView"},{"attributes":{"children":[[{"id":"17219"},0,0]]},"id":"17273","type":"GridBox"},{"attributes":{"axis":{"id":"17228"},"coordinates":null,"group":null,"ticker":null},"id":"17231","type":"Grid"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17255","type":"Scatter"},{"attributes":{},"id":"17264","type":"AllLabels"},{"attributes":{"toolbars":[{"id":"17246"}],"tools":[{"id":"17236"},{"id":"17237"},{"id":"17238"},{"id":"17239"},{"id":"17240"},{"id":"17241"},{"id":"17242"},{"id":"17243"}]},"id":"17274","type":"ProxyToolbar"}],"root_ids":["17276"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"8bbcb9b3-49ad-42d9-b987-5929e2a312db","root_ids":["17276"],"roots":{"17276":"8e2fd57e-945c-480a-819a-98a613d53c4b"}}];
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