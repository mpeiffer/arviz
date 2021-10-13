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
    
      
      
    
      const element = document.getElementById("60012098-0f06-4d9f-9542-5becab64c6f3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '60012098-0f06-4d9f-9542-5becab64c6f3' but no matching script tag was found.")
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
                    
                  const docs_json = '{"5bf5a66c-4b33-4abb-bd7f-3370bc5f70fd":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"23766"},"glyph":{"id":"23767"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23769"},"nonselection_glyph":{"id":"23768"},"view":{"id":"23771"}},"id":"23770","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23756","type":"Patch"},{"attributes":{"children":[{"id":"23793"},{"id":"23791"}]},"id":"23794","type":"Column"},{"attributes":{},"id":"23728","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null},"id":"23774","type":"Title"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23768","type":"Patch"},{"attributes":{},"id":"23732","type":"BasicTicker"},{"attributes":{},"id":"23784","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"23745"}],"tools":[{"id":"23735"},{"id":"23736"},{"id":"23737"},{"id":"23738"},{"id":"23739"},{"id":"23740"},{"id":"23741"},{"id":"23742"}]},"id":"23792","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"23760"},"glyph":{"id":"23761"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23763"},"nonselection_glyph":{"id":"23762"},"view":{"id":"23765"}},"id":"23764","type":"GlyphRenderer"},{"attributes":{},"id":"23783","type":"Selection"},{"attributes":{},"id":"23785","type":"Selection"},{"attributes":{"coordinates":null,"formatter":{"id":"23777"},"group":null,"major_label_policy":{"id":"23778"},"ticker":{"id":"23732"}},"id":"23731","type":"LinearAxis"},{"attributes":{},"id":"23740","type":"UndoTool"},{"attributes":{},"id":"23741","type":"SaveTool"},{"attributes":{},"id":"23782","type":"UnionRenderers"},{"attributes":{},"id":"23780","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"23760"}},"id":"23765","type":"CDSView"},{"attributes":{"overlay":{"id":"23744"}},"id":"23739","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"23727"}],"center":[{"id":"23730"},{"id":"23734"}],"height":500,"left":[{"id":"23731"}],"output_backend":"webgl","renderers":[{"id":"23758"},{"id":"23764"},{"id":"23770"}],"title":{"id":"23774"},"toolbar":{"id":"23745"},"toolbar_location":null,"width":500,"x_range":{"id":"23772"},"x_scale":{"id":"23723"},"y_range":{"id":"23773"},"y_scale":{"id":"23725"}},"id":"23718","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"23742","type":"HoverTool"},{"attributes":{},"id":"23723","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[310]},"y":{"__ndarray__":"XPGj59uw6j8goxEq/O7sP+BUf2wcLe8/UoN2V5618D80XK14rtTxPxQ15Jm+8/I/9g0bu84S9D/Y5lHc3jH1P7i/iP3uUPY/mpi/Hv9v9z98cfY/D4/4P1xKLWEfrvk/PiNkgi/N+j/2tkbAkl77PyD8mqM/7Ps/ANXRxE8L/T/krQjmXyr+P7BAYdOVyP4/xIY/B3BJ/z/SLzsUQDQAQErGR8WsswBARJzWJMjDAEC0CHI1UFMBQCR1DUbY4gFAEwx+0qvlAUCW4ahWYHICQLw7xni2+gJABk5EZ+gBA0B2ut93cJEDQN8U7qqluQNA6CZ7iPggBEDnl7iPW2gEQFiTFpmAsARA8s60akwVBUDI/7GpCEAFQEp8RYNOxgVAOmxNupDPBUCq2OjKGF8GQDqwpFiaeAZAGkWE26DuBkB3IeyPXxUHQIyxH+wofgdARS1ut5GlB0D8Hbv8sA0IQHa7GubTNQhAbIpWDTmdCECqVTSSL8cIQN728R3BLAlACQ9uKgVNCUBOY40uSbwJQJ5abObowAlAcIBQ4f8iCkDAzyg/0UsKQNbZbiPcewpAKqRfZTfbCkAwPMRPWdsKQBRHduU+SAtAoKhfYOFqC0Ai2sAL4LELQBIV+3Bp+gtA1NX0gd0NDEAMYLXoQFwMQIKBloHxiQxAd1ldHcShDEBSaxDDfeYMQPLtMZJ5GQ1AUXPXyOIgDUB4ppVbbVcNQBmH8faWiQ1AZFrNogGpDUDji5Udo8MNQCiLIioz+g1AboQZEk0jDkDUxmiziTgOQAT4mVM1Qg5Af3sG0NtnDkB0NG/L+IwOQBYjQGjgpw5AZKa6L/21DkA2S1VVI8AOQCFs7otZxg5Au5wr5v/ADkAW5K0aTKUOQO+rBkCHeg5AylMhj5tUDkDUxmiziTgOQDrQUD37Lw5AGw/sWS8SDkAWXJkJGOQNQGRazaIBqQ1A+ZQhVOiFDUDy7TGSeRkNQIYc5jfWtwxAgoGWgfGJDED5fZXnkzAMQBIV+3Bp+gtAGDoOEFGDC0CgqF9g4WoLQDA8xE9Z2wpAwM8oP9FLCkBNVM57uUsKQE5jjS5JvAlA3vbxHcEsCUBsilYNOZ0IQOlBlwu3kAhA/B27/LANCECMsR/sKH4HQBpFhNug7gZAqtjoyhhfBkAiJAILGgoGQDpsTbqQzwVAyP+xqQhABUBYkxaZgLAEQOgme4j4IARAdrrfd3CRA0AGTkRn6AEDQK8J273B7wJAluGoVmByAkAkdQ1G2OIBQLQIcjVQUwFATg9yY4gHAUBEnNYkyMMAQNIvOxRANABAmajnhVSK/z/Ehj8HcEn/P+StCOZfKv4/NofGVlxC/T8A1dHETwv9PyD8mqM/7Ps/kD/5x6Ze+z8+I2SCL836P/YLfpqcuvk/XEotYR+u+T98cfY/D4/4P+snKK4tQPg/mpi/Hv9v9z/lr0XUQtr2P7i/iP3uUPY/TDjcyDx99T/Y5lHc3jH1P6m6AP5qNfQ/9g0bu84S9D+RGVmmCQ3zPxQ15Jm+8/I/NFyteK7U8T9+zYoIP87xP1KDdleetfA/ec+numB38D/gVH9sHC3vP4aiAi/ayO4/uqLMWTDw7D8goxEq/O7sP55zpfQNGes/XPGj59uw6j+WIfMvLFrpP5g/NqW7cug/ysTVL+y/5z9KSxC4EDbmP9iNyGKbNOY/m1tHhl635D8U3Foge/bjPwJA9ZgZaeM/x1uFcQxF4j9QKu3dWrjhP4v0EThbNuE/PmE37pkB4D8g8f42dfTeP5sE2+Azat0/xA3LOZAx2z+YjSOyNHjaP3Kyg/uDStk/VP5Tiohv1z8QKkgt9PvVP/KSPURsdNU/15hDc8mf0z8fVhYk2TPSP4jGbKizf9E/DHbteMw40T806QI8ZIfQP4HLGlk+lc8/y/sriySdzj+uQM8xtj7OPwkI8l4jws0/fk9oVJS2zT9Y2ABMy7fOP88QWTphYM8/GsbZ5FB0zz/Ora/5v47QP4jGbKizf9E/WpdQaNlQ0j+xlSRaqPvTP5avqgpUlNU/ECpILfT71T/GUBXIiI/XP5iNI7I0eNo/zf1VXbUT2z8g8f42dfTeP7kpek0UROA/UCrt3Vq44T8qnhbesIbiPxTcWiB79uM/sOzRBoRB5T/YjchimzTmP5g/NqW7cug/YQDb2J/s6D9c8aPn27DqP3xx9j8Pj/g/mpi/Hv9v9z+kTlU7Xmf2P7i/iP3uUPY/2OZR3N4x9T9C/4TXaOr0P/YNG7vOEvQ/gbDGDeWA8z8UNeSZvvPyP7y7BhPv4/I/Atjv/EJ28j8+FPqSYxfyP++bRv9g7PE/7zoLdYPr8T/sdlpIKBHyP3R+v32PW/I/+96iPIW48j8UNeSZvvPyP9jsyNmHK/M/bIv7QyGz8z/2DRu7zhL0PzkfMSNmSvQ/VXsYXyDc9D/Y5lHc3jH1PwoFTBU0cPU/pPmbTRUd9j+4v4j97lD2PwQzlv0K+/Y/mpi/Hv9v9z/mLPmPOAL4P3xx9j8Pj/g/0Fr3bUws+T9cSi1hH675P4qajypGbvo/PiNkgi/N+j8qjo7GfuX7PyD8mqM/7Ps/ANXRxE8L/T/07EX9PK79P+StCOZfKv4/xIY/B3BJ/z8RIFq3JHH/P9IvOxRANABAiFuhT1GtAEBEnNYkyMMAQLQIcjVQUwFAJHUNRtjiAUCmYq7gHPMBQJbhqFZgcgJABk5EZ+gBA0B2ut93cJEDQOgme4j4IARAWJMWmYCwBECjLytd0ckEQMj/sakIQAVAAvIxXR3EBUA5bE26kM8FQMNGWGrIUgZAqtjoyhhfBkANsDFSZsIGQBpFhNug7gZAChlMlsIYB0B8fofXWE8HQKsOoUlmagdAI6Sch7pvB0BUPuGcfWYHQJBglhG7UwdAxpJMHAYzB0AbGGPWYAoHQBpFhNug7gZAz9MytObgBkCNSQdcuK8GQD6hG/ZgbwZAqtjoyhhfBkDL2KuHWCEGQDpsTbqQzwVAdXpkZK/NBUAeQJVMDHAFQMj/sakIQAVAfhg48BYDBUBYkxaZgLAEQAaTFV+SggRA6CZ7iPggBEDjDsz52OkDQHa633dwkQNAwsIWCFs9A0AGTkRn6AEDQI2EMX8LlQJAluGoVmByAkDf2/mt/uMBQCR1DUbY4gFAtAhyNVBTAUBcilgEre4AQESc1iTIwwBA0i87FEA0AEDDhj8HcEn/P1VwPO6tR/8/5K0I5l8q/j8A1dHETwv9Px/8mqM/7Ps/bgJHHjb0+j8+I2SCL836P1xKLWEfrvk/fHH2Pw+P+D8=","dtype":"float64","order":"little","shape":[310]}},"selected":{"id":"23785"},"selection_policy":{"id":"23784"}},"id":"23760","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"23718"},0,0]]},"id":"23791","type":"GridBox"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[520]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[520]}},"selected":{"id":"23783"},"selection_policy":{"id":"23782"}},"id":"23754","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"pz1Yelxh8D84EWtmRXPwPxo0qIJsfPA/I1j31fez8D85pwm3+QfxPxhX0GkVWvE/PCXoqI648T8+4f/+G7nxPxR9omoWM/I/S7pNiWbE8j9gFijPsPTyP5F9B/sobfM/qnLp3wcv9D+AB2j10jD0P0uWUzXkK/U/pPinG/Vs9T+5f49KQzr2P8jp50EXqfY/Lnyhaz8/9z/o2idoOeX3P3yxA1HYT/g/DMxnjlsh+T942VdXa4v5PzC9p7R9Xfo/yIgYLY4N+z9Urufan5n7P3SfJwHC1fw/1Qwgw0rd/D+YkGcn5BH+PyJmB7hjC/8/vIGnTQZO/z9uufM5FEUAQACyE00l4wBAL39XQTgXAUCSqjNgNoEBQCKjU3NHHwJAtJtzhli9AkBGlJOZaVsDQNaMs6x6+QNAaIXTv4uXBED6ffPSnDUFQIx2E+at0wVAUGy/pVUnBkAcbzP5vnEGQFK9sVmB/wZArmdTDNAPB0AXyhqS66IHQEBgcx/hrQdApsrL+wsSCEDQWJMy8ksIQM1FSKyHVwhAxYiwFldwCEDUUeaFLHIIQE+mquEkdAhAwJZwFSBrCEDQWJMy8ksIQDSrRH9jRwhA9tf8MSMECEAcmnGij7oHQEBgcx/hrQdA1Il+Px9lB0CuZ1MM0A8HQK+HqWGfAgdA4jIlaGqcBkAcbzP5vnEGQLvSQUxIPAZAwdAxNmnWBUCMdhPmrdMFQGKnupTgYAVA+n3z0pw1BUA0JP6modgEQGiF07+LlwRAgnvcQKBHBEDWjLOsevkDQES5RV+dpwNARpSTmWlbA0DYp0ye7+QCQLSbc4ZYvQJAIqNTc0cfAkA6nJLPVNwBQJKqM2A2gQFAALITTSXjAEDp1MO7IqUAQG658zkURQBAvIGnTQZO/z9rzGgWU7b+P5iQZyfkEf4/dJ8nAcLV/D9Urufan5n7PzC9p7R9Xfo/DMxnjlsh+T/o2idoOeX3P8jp50EXqfY/pPinG/Vs9T9zmxyS3UH1P4AHaPXSMPQ/uP9e0VqR8z9gFijPsPTyPxBKAJ8TxPI/GMvmRIPN8T88JeiojrjxP/TbBEGE7PA/GjSogmx88D+nPVh6XGHwPw==","dtype":"float64","order":"little","shape":[104]},"y":{"__ndarray__":"XEotYR+u+T8+I2SCL836P28CRx429Po/IPyaoz/s+z8A1dHETwv9P+StCOZfKv4/VXA87q1H/z/Ehj8HcEn/P9IvOxRANABARJzWJMjDAEBcilgEre4AQLQIcjVQUwFAJXUNRtjiAUDf2/mt/uMBQJbhqFZgcgJAjYQxfwuVAkAGTkRn6AEDQMLCFghbPQNAdrrfd3CRA0DjDsz52OkDQOgme4j4IARABpMVX5KCBEBYkxaZgLAEQH4YOPAWAwVAyP+xqQhABUAeQJVMDHAFQHV6ZGSvzQVAOmxNupDPBUDM2KuHWCEGQKrY6MoYXwZAPqEb9mBvBkCNSQdcuK8GQM/TMrTm4AZAGkWE26DuBkAbGGPWYAoHQMaSTBwGMwdAkGCWEbtTB0BUPuGcfWYHQCOknIe6bwdAqw6hSWZqB0B7fofXWE8HQAoZTJbCGAdAGkWE26DuBkAOsDFSZsIGQKrY6MoYXwZAw0ZYashSBkA6bE26kM8FQALyMV0dxAVAyP+xqQhABUCjLytd0ckEQFiTFpmAsARA6CZ7iPggBEB2ut93cJEDQAZORGfoAQNAluGoVmByAkCnYq7gHPMBQCR1DUbY4gFAtAhyNVBTAUBEnNYkyMMAQIhboU9RrQBA0i87FEA0AEAQIFq3JHH/P8SGPwdwSf8/460I5l8q/j/07EX9PK79PwDV0cRPC/0/H/yaoz/s+z8qjo7GfuX7Pz4jZIIvzfo/ipqPKkZu+j9cSi1hH675P9Ba921MLPk/fHH2Pw+P+D/mLPmPOAL4P5qYvx7/b/c/BTOW/Qr79j+4v4j97lD2P6T5m00VHfY/CgVMFTRw9T/Y5lHc3jH1P1V7GF8g3PQ/OR8xI2ZK9D/2DRu7zhL0P22L+0Mhs/M/2OzI2Ycr8z8UNeSZvvPyP/veojyFuPI/dH6/fY9b8j/sdlpIKBHyP+86C3WD6/E/8JtG/2Ds8T8+FPqSYxfyPwLY7/xCdvI/vLsGE+/j8j8VNeSZvvPyP4Gwxg3lgPM/9g0bu84S9D9C/4TXaOr0P9jmUdzeMfU/uL+I/e5Q9j+kTlU7Xmf2P5qYvx7/b/c/fHH2Pw+P+D9cSi1hH675Pw==","dtype":"float64","order":"little","shape":[104]}},"selected":{"id":"23787"},"selection_policy":{"id":"23786"}},"id":"23766","type":"ColumnDataSource"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23761","type":"Patch"},{"attributes":{},"id":"23778","type":"AllLabels"},{"attributes":{},"id":"23781","type":"AllLabels"},{"attributes":{"overlay":{"id":"23743"}},"id":"23737","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23743","type":"BoxAnnotation"},{"attributes":{},"id":"23725","type":"LinearScale"},{"attributes":{},"id":"23777","type":"BasicTickFormatter"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23755","type":"Patch"},{"attributes":{"source":{"id":"23754"}},"id":"23759","type":"CDSView"},{"attributes":{},"id":"23738","type":"WheelZoomTool"},{"attributes":{"source":{"id":"23766"}},"id":"23771","type":"CDSView"},{"attributes":{"end":6.973314299768137,"start":-2.8286733248517457},"id":"23772","type":"Range1d"},{"attributes":{},"id":"23786","type":"UnionRenderers"},{"attributes":{},"id":"23736","type":"PanTool"},{"attributes":{"fill_alpha":0.2,"fill_color":"#94c4df","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23757","type":"Patch"},{"attributes":{"tools":[{"id":"23735"},{"id":"23736"},{"id":"23737"},{"id":"23738"},{"id":"23739"},{"id":"23740"},{"id":"23741"},{"id":"23742"}]},"id":"23745","type":"Toolbar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23744","type":"PolyAnnotation"},{"attributes":{"fill_alpha":0.2,"fill_color":"#4a98c9","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23763","type":"Patch"},{"attributes":{"coordinates":null,"formatter":{"id":"23780"},"group":null,"major_label_policy":{"id":"23781"},"ticker":{"id":"23728"}},"id":"23727","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"23754"},"glyph":{"id":"23755"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23757"},"nonselection_glyph":{"id":"23756"},"view":{"id":"23759"}},"id":"23758","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"23727"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"23730","type":"Grid"},{"attributes":{"axis":{"id":"23731"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"23734","type":"Grid"},{"attributes":{"end":6.580956069336984,"start":-2.319679151553313},"id":"23773","type":"Range1d"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23762","type":"Patch"},{"attributes":{},"id":"23787","type":"Selection"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23767","type":"Patch"},{"attributes":{"toolbar":{"id":"23792"},"toolbar_location":"above"},"id":"23793","type":"ToolbarBox"},{"attributes":{"fill_alpha":0.2,"fill_color":"#1764ab","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23769","type":"Patch"},{"attributes":{},"id":"23735","type":"ResetTool"}],"root_ids":["23794"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"5bf5a66c-4b33-4abb-bd7f-3370bc5f70fd","root_ids":["23794"],"roots":{"23794":"60012098-0f06-4d9f-9542-5becab64c6f3"}}];
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