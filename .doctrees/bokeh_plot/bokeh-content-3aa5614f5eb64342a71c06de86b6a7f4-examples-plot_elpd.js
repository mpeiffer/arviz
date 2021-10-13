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
    
      
      
    
      const element = document.getElementById("bc3de3bb-5356-4026-bd8b-57b0568d7c08");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bc3de3bb-5356-4026-bd8b-57b0568d7c08' but no matching script tag was found.")
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
                    
                  const docs_json = '{"bd779ac9-6547-4446-a843-4fe57d907de0":{"defs":[],"roots":{"references":[{"attributes":{"toolbars":[{"id":"20542"}],"tools":[{"id":"20532"},{"id":"20533"},{"id":"20534"},{"id":"20535"},{"id":"20536"},{"id":"20537"},{"id":"20538"},{"id":"20539"}]},"id":"20570","type":"ProxyToolbar"},{"attributes":{"children":[[{"id":"20515"},0,0]]},"id":"20569","type":"GridBox"},{"attributes":{},"id":"20538","type":"SaveTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20552"},"glyph":{"id":"20551"},"group":null,"hover_glyph":null,"view":{"id":"20554"}},"id":"20553","type":"GlyphRenderer"},{"attributes":{},"id":"20562","type":"BasicTickFormatter"},{"attributes":{},"id":"20537","type":"UndoTool"},{"attributes":{"source":{"id":"20552"}},"id":"20554","type":"CDSView"},{"attributes":{},"id":"20516","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20555","type":"Title"},{"attributes":{},"id":"20559","type":"BasicTickFormatter"},{"attributes":{},"id":"20565","type":"Selection"},{"attributes":{"callback":null},"id":"20539","type":"HoverTool"},{"attributes":{"overlay":{"id":"20540"}},"id":"20534","type":"BoxZoomTool"},{"attributes":{},"id":"20520","type":"LinearScale"},{"attributes":{},"id":"20522","type":"LinearScale"},{"attributes":{},"id":"20560","type":"AllLabels"},{"attributes":{"below":[{"id":"20524"}],"center":[{"id":"20527"},{"id":"20531"}],"height":288,"left":[{"id":"20528"}],"output_backend":"webgl","renderers":[{"id":"20553"}],"title":{"id":"20555"},"toolbar":{"id":"20542"},"toolbar_location":null,"width":432,"x_range":{"id":"20516"},"x_scale":{"id":"20520"},"y_range":{"id":"20518"},"y_scale":{"id":"20522"}},"id":"20515","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"20528"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20531","type":"Grid"},{"attributes":{"overlay":{"id":"20541"}},"id":"20536","type":"LassoSelectTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20551","type":"Scatter"},{"attributes":{},"id":"20533","type":"PanTool"},{"attributes":{},"id":"20563","type":"AllLabels"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20559"},"group":null,"major_label_policy":{"id":"20560"},"ticker":{"id":"20529"}},"id":"20528","type":"LinearAxis"},{"attributes":{"tools":[{"id":"20532"},{"id":"20533"},{"id":"20534"},{"id":"20535"},{"id":"20536"},{"id":"20537"},{"id":"20538"},{"id":"20539"}]},"id":"20542","type":"Toolbar"},{"attributes":{},"id":"20564","type":"UnionRenderers"},{"attributes":{},"id":"20535","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"20570"},"toolbar_location":"above"},"id":"20571","type":"ToolbarBox"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20541","type":"PolyAnnotation"},{"attributes":{},"id":"20532","type":"ResetTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20565"},"selection_policy":{"id":"20564"}},"id":"20552","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20540","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"20524"},"coordinates":null,"group":null,"ticker":null},"id":"20527","type":"Grid"},{"attributes":{},"id":"20525","type":"BasicTicker"},{"attributes":{},"id":"20518","type":"DataRange1d"},{"attributes":{},"id":"20529","type":"BasicTicker"},{"attributes":{"children":[{"id":"20571"},{"id":"20569"}]},"id":"20572","type":"Column"},{"attributes":{"coordinates":null,"formatter":{"id":"20562"},"group":null,"major_label_policy":{"id":"20563"},"ticker":{"id":"20525"}},"id":"20524","type":"LinearAxis"}],"root_ids":["20572"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"bd779ac9-6547-4446-a843-4fe57d907de0","root_ids":["20572"],"roots":{"20572":"bc3de3bb-5356-4026-bd8b-57b0568d7c08"}}];
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