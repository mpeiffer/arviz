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
    
      
      
    
      const element = document.getElementById("02d722b9-0dda-4b55-a95c-541ca133d2d8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '02d722b9-0dda-4b55-a95c-541ca133d2d8' but no matching script tag was found.")
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
                    
                  const docs_json = '{"3f87428d-b67b-4353-80e3-481f2f599650":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"ESS for small intervals","coordinates":null,"formatter":{"id":"21021"},"group":null,"major_label_policy":{"id":"21022"},"ticker":{"id":"20983"}},"id":"20982","type":"LinearAxis"},{"attributes":{},"id":"20987","type":"PanTool"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21024"},"group":null,"major_label_policy":{"id":"21025"},"ticker":{"id":"20979"}},"id":"20978","type":"LinearAxis"},{"attributes":{"below":[{"id":"20978"}],"center":[{"id":"20981"},{"id":"20985"}],"height":500,"left":[{"id":"20982"}],"output_backend":"webgl","renderers":[{"id":"21009"},{"id":"21013"},{"id":"21015"},{"id":"21016"}],"title":{"id":"21017"},"toolbar":{"id":"20996"},"toolbar_location":null,"width":500,"x_range":{"id":"20970"},"x_scale":{"id":"20974"},"y_range":{"id":"20972"},"y_scale":{"id":"20976"}},"id":"20969","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20995","type":"PolyAnnotation"},{"attributes":{},"id":"21025","type":"AllLabels"},{"attributes":{},"id":"20989","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"21017","type":"Title"},{"attributes":{},"id":"21022","type":"AllLabels"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21006","type":"Circle"},{"attributes":{"axis":{"id":"20982"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20985","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21008","type":"Circle"},{"attributes":{"toolbars":[{"id":"20996"}],"tools":[{"id":"20986"},{"id":"20987"},{"id":"20988"},{"id":"20989"},{"id":"20990"},{"id":"20991"},{"id":"20992"},{"id":"20993"}]},"id":"21034","type":"ProxyToolbar"},{"attributes":{"source":{"id":"21012"}},"id":"21014","type":"CDSView"},{"attributes":{},"id":"20986","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21007","type":"Circle"},{"attributes":{"callback":null},"id":"20993","type":"HoverTool"},{"attributes":{},"id":"20976","type":"LinearScale"},{"attributes":{},"id":"20983","type":"BasicTicker"},{"attributes":{},"id":"21027","type":"Selection"},{"attributes":{"children":[[{"id":"20969"},0,0]]},"id":"21033","type":"GridBox"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21027"},"selection_policy":{"id":"21026"}},"id":"21005","type":"ColumnDataSource"},{"attributes":{},"id":"21026","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"20986"},{"id":"20987"},{"id":"20988"},{"id":"20989"},{"id":"20990"},{"id":"20991"},{"id":"20992"},{"id":"20993"}]},"id":"20996","type":"Toolbar"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21016","type":"Span"},{"attributes":{},"id":"21029","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"21005"},"glyph":{"id":"21006"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21008"},"nonselection_glyph":{"id":"21007"},"view":{"id":"21010"}},"id":"21009","type":"GlyphRenderer"},{"attributes":{},"id":"21021","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"20994"}},"id":"20988","type":"BoxZoomTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"21029"},"selection_policy":{"id":"21028"}},"id":"21012","type":"ColumnDataSource"},{"attributes":{},"id":"20992","type":"SaveTool"},{"attributes":{"toolbar":{"id":"21034"},"toolbar_location":"above"},"id":"21035","type":"ToolbarBox"},{"attributes":{"coordinates":null,"data_source":{"id":"21012"},"glyph":{"id":"21011"},"group":null,"hover_glyph":null,"view":{"id":"21014"}},"id":"21013","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"21035"},{"id":"21033"}]},"id":"21036","type":"Column"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20994","type":"BoxAnnotation"},{"attributes":{},"id":"20979","type":"BasicTicker"},{"attributes":{},"id":"21024","type":"BasicTickFormatter"},{"attributes":{},"id":"20974","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"21015","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"21011","type":"Scatter"},{"attributes":{},"id":"20972","type":"DataRange1d"},{"attributes":{"source":{"id":"21005"}},"id":"21010","type":"CDSView"},{"attributes":{},"id":"20991","type":"UndoTool"},{"attributes":{"axis":{"id":"20978"},"coordinates":null,"group":null,"ticker":null},"id":"20981","type":"Grid"},{"attributes":{},"id":"21028","type":"UnionRenderers"},{"attributes":{},"id":"20970","type":"DataRange1d"},{"attributes":{"overlay":{"id":"20995"}},"id":"20990","type":"LassoSelectTool"}],"root_ids":["21036"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"3f87428d-b67b-4353-80e3-481f2f599650","root_ids":["21036"],"roots":{"21036":"02d722b9-0dda-4b55-a95c-541ca133d2d8"}}];
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