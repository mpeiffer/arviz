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
    
      
      
    
      const element = document.getElementById("de1be6d1-4039-4c40-8184-7cea29ba0c2c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'de1be6d1-4039-4c40-8184-7cea29ba0c2c' but no matching script tag was found.")
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
                    
                  const docs_json = '{"1f26ebad-72da-4e97-ae36-0ffb9fb562e7":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41758","type":"Span"},{"attributes":{"callback":null},"id":"41723","type":"HoverTool"},{"attributes":{},"id":"41781","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"41687","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"41735"},"glyph":{"id":"41736"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41738"},"nonselection_glyph":{"id":"41737"},"view":{"id":"41740"}},"id":"41739","type":"GlyphRenderer"},{"attributes":{},"id":"41782","type":"AllLabels"},{"attributes":{"overlay":{"id":"41724"}},"id":"41718","type":"BoxZoomTool"},{"attributes":{},"id":"41717","type":"PanTool"},{"attributes":{},"id":"41716","type":"ResetTool"},{"attributes":{},"id":"41784","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"41688"}},"id":"41682","type":"BoxZoomTool"},{"attributes":{},"id":"41722","type":"SaveTool"},{"attributes":{},"id":"41719","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"41725"}},"id":"41720","type":"LassoSelectTool"},{"attributes":{},"id":"41785","type":"AllLabels"},{"attributes":{},"id":"41721","type":"UndoTool"},{"attributes":{},"id":"41700","type":"DataRange1d"},{"attributes":{"children":[{"id":"41795"},{"id":"41793"}]},"id":"41796","type":"Column"},{"attributes":{"source":{"id":"41745"}},"id":"41747","type":"CDSView"},{"attributes":{},"id":"41680","type":"ResetTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41724","type":"BoxAnnotation"},{"attributes":{},"id":"41686","type":"SaveTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41725","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"41757","type":"Span"},{"attributes":{},"id":"41786","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"41663"},0,0],[{"id":"41699"},0,1]]},"id":"41793","type":"GridBox"},{"attributes":{},"id":"41673","type":"BasicTicker"},{"attributes":{},"id":"41681","type":"PanTool"},{"attributes":{},"id":"41683","type":"WheelZoomTool"},{"attributes":{},"id":"41787","type":"Selection"},{"attributes":{"toolbars":[{"id":"41690"},{"id":"41726"}],"tools":[{"id":"41680"},{"id":"41681"},{"id":"41682"},{"id":"41683"},{"id":"41684"},{"id":"41685"},{"id":"41686"},{"id":"41687"},{"id":"41716"},{"id":"41717"},{"id":"41718"},{"id":"41719"},{"id":"41720"},{"id":"41721"},{"id":"41722"},{"id":"41723"}]},"id":"41794","type":"ProxyToolbar"},{"attributes":{},"id":"41685","type":"UndoTool"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"41763","type":"Title"},{"attributes":{"overlay":{"id":"41689"}},"id":"41684","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"41672"},"coordinates":null,"group":null,"ticker":null},"id":"41675","type":"Grid"},{"attributes":{"axis":{"id":"41676"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41679","type":"Grid"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41759","type":"Scatter"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41784"},"group":null,"major_label_policy":{"id":"41785"},"ticker":{"id":"41709"}},"id":"41708","type":"LinearAxis"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41767"},"group":null,"major_label_policy":{"id":"41768"},"ticker":{"id":"41677"}},"id":"41676","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41688","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41689","type":"PolyAnnotation"},{"attributes":{},"id":"41767","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41753","type":"Circle"},{"attributes":{},"id":"41677","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41737","type":"Circle"},{"attributes":{},"id":"41768","type":"AllLabels"},{"attributes":{"source":{"id":"41750"}},"id":"41755","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41752","type":"Circle"},{"attributes":{},"id":"41770","type":"BasicTickFormatter"},{"attributes":{},"id":"41788","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41751","type":"Circle"},{"attributes":{},"id":"41668","type":"LinearScale"},{"attributes":{},"id":"41789","type":"Selection"},{"attributes":{},"id":"41771","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"41750"},"glyph":{"id":"41751"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41753"},"nonselection_glyph":{"id":"41752"},"view":{"id":"41755"}},"id":"41754","type":"GlyphRenderer"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41770"},"group":null,"major_label_policy":{"id":"41771"},"ticker":{"id":"41673"}},"id":"41672","type":"LinearAxis"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41775"},"selection_policy":{"id":"41774"}},"id":"41745","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41741","type":"Span"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41773"},"selection_policy":{"id":"41772"}},"id":"41735","type":"ColumnDataSource"},{"attributes":{},"id":"41772","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"41716"},{"id":"41717"},{"id":"41718"},{"id":"41719"},{"id":"41720"},{"id":"41721"},{"id":"41722"},{"id":"41723"}]},"id":"41726","type":"Toolbar"},{"attributes":{},"id":"41704","type":"LinearScale"},{"attributes":{"end":1,"start":-0.05},"id":"41666","type":"DataRange1d"},{"attributes":{},"id":"41773","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41738","type":"Circle"},{"attributes":{"source":{"id":"41735"}},"id":"41740","type":"CDSView"},{"attributes":{"below":[{"id":"41672"}],"center":[{"id":"41675"},{"id":"41679"}],"height":500,"left":[{"id":"41676"}],"output_backend":"webgl","renderers":[{"id":"41739"},{"id":"41741"},{"id":"41742"},{"id":"41743"},{"id":"41746"}],"title":{"id":"41748"},"toolbar":{"id":"41690"},"toolbar_location":null,"width":500,"x_range":{"id":"41664"},"x_scale":{"id":"41668"},"y_range":{"id":"41666"},"y_scale":{"id":"41670"}},"id":"41663","subtype":"Figure","type":"Plot"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41744","type":"Scatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41742","type":"Span"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"41748","type":"Title"},{"attributes":{},"id":"41670","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41787"},"selection_policy":{"id":"41786"}},"id":"41750","type":"ColumnDataSource"},{"attributes":{},"id":"41713","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41743","type":"Span"},{"attributes":{"end":1,"start":-0.05},"id":"41702","type":"DataRange1d"},{"attributes":{"below":[{"id":"41708"}],"center":[{"id":"41711"},{"id":"41715"}],"height":500,"left":[{"id":"41712"}],"output_backend":"webgl","renderers":[{"id":"41754"},{"id":"41756"},{"id":"41757"},{"id":"41758"},{"id":"41761"}],"title":{"id":"41763"},"toolbar":{"id":"41726"},"toolbar_location":null,"width":500,"x_range":{"id":"41700"},"x_scale":{"id":"41704"},"y_range":{"id":"41702"},"y_scale":{"id":"41706"}},"id":"41699","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"41712"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41715","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"41745"},"glyph":{"id":"41744"},"group":null,"hover_glyph":null,"view":{"id":"41747"}},"id":"41746","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"41680"},{"id":"41681"},{"id":"41682"},{"id":"41683"},{"id":"41684"},{"id":"41685"},{"id":"41686"},{"id":"41687"}]},"id":"41690","type":"Toolbar"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"41756","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41736","type":"Circle"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41781"},"group":null,"major_label_policy":{"id":"41782"},"ticker":{"id":"41713"}},"id":"41712","type":"LinearAxis"},{"attributes":{},"id":"41774","type":"UnionRenderers"},{"attributes":{},"id":"41664","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"41760"},"glyph":{"id":"41759"},"group":null,"hover_glyph":null,"view":{"id":"41762"}},"id":"41761","type":"GlyphRenderer"},{"attributes":{},"id":"41706","type":"LinearScale"},{"attributes":{"source":{"id":"41760"}},"id":"41762","type":"CDSView"},{"attributes":{},"id":"41775","type":"Selection"},{"attributes":{"toolbar":{"id":"41794"},"toolbar_location":"above"},"id":"41795","type":"ToolbarBox"},{"attributes":{},"id":"41709","type":"BasicTicker"},{"attributes":{"axis":{"id":"41708"},"coordinates":null,"group":null,"ticker":null},"id":"41711","type":"Grid"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41789"},"selection_policy":{"id":"41788"}},"id":"41760","type":"ColumnDataSource"}],"root_ids":["41796"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"1f26ebad-72da-4e97-ae36-0ffb9fb562e7","root_ids":["41796"],"roots":{"41796":"de1be6d1-4039-4c40-8184-7cea29ba0c2c"}}];
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