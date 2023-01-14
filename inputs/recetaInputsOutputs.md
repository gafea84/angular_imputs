### Como crear un input para pasar informacion del padre al hijo.

      Paso 1 - en el etiqueta personalizada o selector del componente hijo tengo que cargar un propiedad de html personaliza, le pongo el nomnbre que yo quiera, y esa propiedad el paso el dato que tiene que existir como propiedad de clase en el componente padre.

      Paso 2: En el componente destino/hijo tengo que crear un propiedad que es del mismo tipo y que tiene el mismo nombre que la padre pero decorada con un @Input(), esto me indica que es propieda es un input y que estará diponible cuando se cargue componente.
