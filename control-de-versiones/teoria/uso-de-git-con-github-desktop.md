# Ciclo de Desarrollo con Git y GitHub Desktop

## 1. Creación de un repositorio en GitHub

### Crear un nuevo repositorio
1. Inicia sesión en GitHub.
2. En la página principal de tu cuenta, haz clic en el botón **New** (Nuevo) en la parte superior derecha.
3. Llena los detalles del repositorio:
   - **Repository name (Nombre del repositorio):** El nombre que tendrá tu repositorio.
   - **Description (Descripción):** Una breve descripción del proyecto (opcional).
   - **Public/Private:** Decide si el repositorio será público o privado.
   - **Gitignore:** Excluye los archivos que se indiquen (por ejemplo, para un proyecto en Java).
   - **Initialize this repository with a README:** Selecciona esta opción si deseas que tu repositorio tenga un archivo README inicial.
4. Haz clic en **Create repository**.

---

## 2. Clonar un repositorio en GitHub Desktop

### Configuración inicial (Solo para ordenadores congelados)
Ejecuta los siguientes comandos en un terminal (cmd o PowerShell):
```
git config --global user.name "Tu Nombre"
git config --global user.email "you@example.com"
```
Reemplaza el contenido entre comillas con tu nombre y correo electrónico. Esto es necesario para realizar cambios en el repositorio.

### Pasos para clonar un repositorio
1. Abre GitHub Desktop.
2. Haz clic en **File** en el menú superior y selecciona **Clone repository**.
3. En la ventana emergente, ve a la pestaña **URL** e ingresa la URL de tu repositorio (si ya existe en GitHub).
4. Selecciona la carpeta donde deseas guardar el repositorio en tu computadora.
5. Haz clic en **Clone**.

---

## 3. Trabajando con Ramas (Branches)

### Crear una nueva rama
1. En GitHub Desktop, haz clic en **Current Branch** y selecciona **New Branch**.
2. Ingresa un nombre para tu nueva rama (por ejemplo, `feature/nueva-funcionalidad`).
3. Haz clic en **Create Branch**. Ahora estás trabajando en esta rama.

### Cambiar entre ramas
1. Haz clic en **Current Branch**.
2. Selecciona la rama a la que deseas cambiar (por ejemplo, `main` o cualquier otra creada).

---

## 4. Hacer Commit de Cambios

### Modificar archivos
Realiza cambios en los archivos de tu proyecto (agregar, modificar o eliminar).

### Ver los cambios
1. Vuelve a GitHub Desktop.
2. En la sección **Changes**, se listarán los archivos modificados.

### Hacer un Commit
1. Escribe un mensaje de commit que describa los cambios realizados (por ejemplo, "Añadido nuevo archivo de configuración").
2. Haz clic en **Commit to [nombre de la rama]**.

---

## 5. Realizar un Merge (Fusión de Ramas)

### Cambiar a la rama principal
1. Cambia a la rama donde deseas fusionar los cambios (por lo general, `main`).
2. En GitHub Desktop, selecciona la rama principal desde **Current Branch**.

### Fusionar la rama de desarrollo
1. Haz clic en **Branch** en el menú superior y selecciona **Merge into Current Branch**.
2. Escoge la rama que deseas fusionar (por ejemplo, `feature/nueva-funcionalidad`).
3. Haz clic en **Merge**.

### Resolver conflictos (si es necesario)
Si hay conflictos, GitHub Desktop te notificará y te mostrará los archivos que necesitan atención. Sigue estos pasos para resolverlos:
1. **Identificar los conflictos:** Abre los archivos conflictivos indicados por GitHub Desktop.
2. **Revisar el contenido:** Examina las diferencias entre las versiones. Verás etiquetas como `<<<<<<<`, `=======` y `>>>>>>>` que delimitan las secciones en conflicto.
   - `<<<<<<<` indica el inicio de los cambios locales.
   - `=======` separa los cambios locales de los remotos.
   - `>>>>>>>` indica el final de los cambios remotos.
3. **Resolver manualmente:** Edita el archivo para conservar únicamente los cambios deseados, eliminando las etiquetas de conflicto.
4. **Guardar cambios:** Guarda el archivo después de resolver los conflictos.
5. **Confirmar la resolución:** Vuelve a GitHub Desktop, donde los conflictos resueltos serán detectados automáticamente.
6. **Hacer un nuevo commit:** Haz clic en **Commit to [nombre de la rama]** para guardar los cambios resueltos.

---

## 6. Subir los Cambios al Repositorio Remoto

### Sincronizar cambios
1. Después de hacer un commit, GitHub Desktop mostrará "Changes to Push".
2. Haz clic en **Push origin** para subir los cambios al repositorio en GitHub.

### Subir una nueva rama
1. Si has creado una nueva rama, haz clic en **Publish Branch**.
2. Esto subirá la rama al repositorio remoto en GitHub.

---

## 7. Actualizar tu Repositorio Local

### Descargar cambios del repositorio remoto
1. Si otros colaboradores han realizado cambios, puedes actualizar tu copia local.
2. Haz clic en **Repository** en el menú superior y selecciona **Fetch origin** para obtener los cambios más recientes desde GitHub.
