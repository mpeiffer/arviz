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
    
      
      
    
      const element = document.getElementById("8b1e8449-6d25-4ffa-8720-6a8bca8d968b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8b1e8449-6d25-4ffa-8720-6a8bca8d968b' but no matching script tag was found.")
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
                    
                  const docs_json = '{"4fd9ffce-2358-475b-a634-a0ac5ab49909":{"defs":[],"roots":{"references":[{"attributes":{},"id":"41923","type":"UndoTool"},{"attributes":{"axis_label":"Value $\\\\pm$ MCSE for quantiles","coordinates":null,"formatter":{"id":"41953"},"group":null,"major_label_policy":{"id":"41954"},"ticker":{"id":"41915"}},"id":"41914","type":"LinearAxis"},{"attributes":{"data":{"xs":[[0.05,0.05],[0.09736842105263158,0.09736842105263158],[0.14473684210526316,0.14473684210526316],[0.19210526315789472,0.19210526315789472],[0.23947368421052628,0.23947368421052628],[0.28684210526315784,0.28684210526315784],[0.33421052631578946,0.33421052631578946],[0.381578947368421,0.381578947368421],[0.4289473684210526,0.4289473684210526],[0.47631578947368414,0.47631578947368414],[0.5236842105263158,0.5236842105263158],[0.5710526315789474,0.5710526315789474],[0.618421052631579,0.618421052631579],[0.6657894736842105,0.6657894736842105],[0.7131578947368421,0.7131578947368421],[0.7605263157894736,0.7605263157894736],[0.8078947368421052,0.8078947368421052],[0.8552631578947368,0.8552631578947368],[0.9026315789473683,0.9026315789473683],[0.95,0.95]],"ys":[[0.06542507260989384,0.07779740932825195],[0.08783828101486021,0.09606135597316004],[0.09938050528645676,0.10552315572600299],[0.10794861576931342,0.11348270780810846],[0.11602734321885094,0.12203033330056018],[0.12350211909750375,0.12787167939093885],[0.12891616867169003,0.13323376159544686],[0.13473004088066556,0.13958486303584752],[0.14096481555257187,0.1460531576744907],[0.14714684275886325,0.15141900007039433],[0.15249024001585332,0.15717175454660753],[0.15761692093229293,0.16322637365277673],[0.16410729163047846,0.16867037944462424],[0.17025660267247006,0.17489182297617661],[0.17657098829958856,0.18216819265595885],[0.185369502560243,0.18948857007780892],[0.19264880841245133,0.19711830100588604],[0.20027922695307082,0.2044362824100993],[0.2124901683329975,0.2184324622519046],[0.23108929611368745,0.2369230522137875]]},"selected":{"id":"41961"},"selection_policy":{"id":"41960"}},"id":"41943","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41938","type":"Scatter"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41926","type":"BoxAnnotation"},{"attributes":{},"id":"41953","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"41925","type":"HoverTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41927","type":"PolyAnnotation"},{"attributes":{"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"41944","type":"MultiLine"},{"attributes":{"source":{"id":"41937"}},"id":"41942","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"41943"},"glyph":{"id":"41944"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41946"},"nonselection_glyph":{"id":"41945"},"view":{"id":"41948"}},"id":"41947","type":"GlyphRenderer"},{"attributes":{},"id":"41960","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"text":"sigma_a"},"id":"41949","type":"Title"},{"attributes":{},"id":"41954","type":"AllLabels"},{"attributes":{},"id":"41961","type":"Selection"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41956"},"group":null,"major_label_policy":{"id":"41957"},"ticker":{"id":"41911"}},"id":"41910","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"41946","type":"MultiLine"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"+Pb8QR1Vsj+MDk73BYq3PyGJcH1IOro/R5qJktxXvD8QN5uHrHi+P+EQ5SCCFsA/nVhJgBDHwD+XHUgZYI7BP8j2F6KAXsI/quCp6LMbwz/9bt2KgNHDP6iPWFCyiMQ/uNKGtzpMxT8aURts6RbGP6Hdfy6V9cY/RM+ntqz9xz+OhgC/8fHIP+aFOeHb5sk//PpdgzyUyz/cM4wQ6vPNPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41959"},"selection_policy":{"id":"41958"}},"id":"41937","type":"ColumnDataSource"},{"attributes":{},"id":"41956","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"41943"}},"id":"41948","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"41945","type":"MultiLine"},{"attributes":{"toolbars":[{"id":"41928"}],"tools":[{"id":"41918"},{"id":"41919"},{"id":"41920"},{"id":"41921"},{"id":"41922"},{"id":"41923"},{"id":"41924"},{"id":"41925"}]},"id":"41966","type":"ProxyToolbar"},{"attributes":{},"id":"41957","type":"AllLabels"},{"attributes":{},"id":"41911","type":"BasicTicker"},{"attributes":{"children":[{"id":"41967"},{"id":"41965"}]},"id":"41968","type":"Column"},{"attributes":{"axis":{"id":"41914"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41917","type":"Grid"},{"attributes":{},"id":"41902","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"41966"},"toolbar_location":"above"},"id":"41967","type":"ToolbarBox"},{"attributes":{},"id":"41915","type":"BasicTicker"},{"attributes":{"below":[{"id":"41910"}],"center":[{"id":"41913"},{"id":"41917"}],"height":500,"left":[{"id":"41914"}],"output_backend":"webgl","renderers":[{"id":"41941"},{"id":"41947"}],"title":{"id":"41949"},"toolbar":{"id":"41928"},"toolbar_location":null,"width":500,"x_range":{"id":"41902"},"x_scale":{"id":"41906"},"y_range":{"id":"41904"},"y_scale":{"id":"41908"}},"id":"41901","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"41958","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41939","type":"Scatter"},{"attributes":{"tools":[{"id":"41918"},{"id":"41919"},{"id":"41920"},{"id":"41921"},{"id":"41922"},{"id":"41923"},{"id":"41924"},{"id":"41925"}]},"id":"41928","type":"Toolbar"},{"attributes":{},"id":"41904","type":"DataRange1d"},{"attributes":{},"id":"41959","type":"Selection"},{"attributes":{"overlay":{"id":"41926"}},"id":"41920","type":"BoxZoomTool"},{"attributes":{"children":[[{"id":"41901"},0,0]]},"id":"41965","type":"GridBox"},{"attributes":{},"id":"41906","type":"LinearScale"},{"attributes":{},"id":"41919","type":"PanTool"},{"attributes":{},"id":"41918","type":"ResetTool"},{"attributes":{},"id":"41908","type":"LinearScale"},{"attributes":{"axis":{"id":"41910"},"coordinates":null,"group":null,"ticker":null},"id":"41913","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"41937"},"glyph":{"id":"41938"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41940"},"nonselection_glyph":{"id":"41939"},"view":{"id":"41942"}},"id":"41941","type":"GlyphRenderer"},{"attributes":{},"id":"41924","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41940","type":"Scatter"},{"attributes":{},"id":"41921","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"41927"}},"id":"41922","type":"LassoSelectTool"}],"root_ids":["41968"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"4fd9ffce-2358-475b-a634-a0ac5ab49909","root_ids":["41968"],"roots":{"41968":"8b1e8449-6d25-4ffa-8720-6a8bca8d968b"}}];
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