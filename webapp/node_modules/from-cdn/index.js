var modules = {};
module.exports = function dhxRequire(data){
    return Promise.all(data.map(function(path){
        return new Promise(function(res, rej){
            //module already loaded
            if (modules[path] === true)
                return res();

            //module is loading
            if (modules[path]){
                modules[path].push([res, rej]);
                return;
            }
            
            //new module
            if (path.indexOf(".css") != -1){
                //css modules
                var link = document.createElement("LINK");
                link.setAttribute("type","text/css");
                link.setAttribute("rel","stylesheet");
                link.setAttribute("href", path);
                document.getElementsByTagName('head')[0].appendChild(link);

                //resolve without waiting
                modules[path]=true;
                res();
            } else {
                //js modules
                var calls = modules[path]=[[res, rej]];

                var newScript = document.createElement("script");                
                newScript.onerror = function(){
                    modules[path] = false;
					for (var i=0; i<calls.length; i++)
						calls[i][1]();
				};
				newScript.onload = function(){
					modules[path] = true;
					for (var i=0; i<calls.length; i++)
						calls[i][0]();
				};
				document.getElementsByTagName('head')[0].appendChild(newScript);
                newScript.src = path;
            }
        });
    }))
}