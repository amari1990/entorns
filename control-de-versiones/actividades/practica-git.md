# **Actividad: Gestión de repositorios en GitHub y desarrollo de una aplicación en Java**

## **Objetivos**
1. Aprender a usar ramas en un repositorio GitHub.
2. Trabajar en equipo para desarrollar un programa en Java.
3. Implementar lógica básica con arrays, strings y números aleatorios.

---

## **Enunciado de la Actividad**

### **Descripción del programa:**
Desarrollar un programa en Java que cumpla las siguientes funciones:
1. Crear una matriz de 5x5 de números aleatorios entre 1 y 100.
2. Mostrar la matriz en la consola.
3. Permitir al usuario buscar un número en la matriz. Si el número está presente, mostrar su posición (fila y columna). Si no, informar que no existe.
4. **(Opcional para grupos de 3):** Calcular y mostrar la suma de todos los números de la matriz.

---

### **Gestión de GitHub:**
1. Crear un repositorio en GitHub para el proyecto.
2. Cada integrante del grupo deberá clonar el repositorio en su ordenador.
3. **Ramas:**
   - Crear tres ramas adicionales desde la rama `main`:
     - `matriz-inicial`: Para generar y mostrar la matriz de números aleatorios.
     - `busqueda-numero`: Para implementar la búsqueda de un número.
     - **(Opcional para grupos de 3):** `suma-matriz`: Para calcular y mostrar la suma de los números.
4. Si el grupo es de **dos personas**, solo trabajarán en `matriz-inicial` y `busqueda-numero`. Ambas ramas deben ser combinadas en `main` al final.

---

### **Instrucciones:**
1. **Inicialización del Repositorio:**
   - Uno de los integrantes debe inicializar el repositorio en GitHub y añadir al resto como colaboradores.
   - Subir un archivo README con el propósito del proyecto y la estructura básica del programa.

2. **Desarrollo:**
   - Cada integrante trabaja en su rama asignada y realiza commits regulares.
   - **Resolviendo conflictos:** Si se encuentran conflictos al combinar ramas, resolverlos en grupo.

3. **Unión del proyecto:**
   - Al finalizar el trabajo en cada rama, combinar las ramas en `main` utilizando pull requests.

4. **Entrega:**
   - Subir un documento en formato PDF al repositorio con:
     - Capturas de pantalla del historial de ramas y commits en GitHub.
     - El código final del programa.
     - Una breve explicación del funcionamiento del programa y los pasos realizados en GitHub.

---

### **Código inicial (esqueleto):**
```java
public class MatrizApp {
    public static void main(String[] args) {
        // TODO: Implementar las funciones según las ramas asignadas
    }
}
```

---

### **Evaluación:**
1. Uso correcto de ramas y commits en GitHub.
2. Trabajo colaborativo en el repositorio.
3. Funcionamiento correcto del programa:
   - Generar y mostrar la matriz.
   - Buscar un número y mostrar su posición.
   - (Opcional) Calcular y mostrar la suma de los números.
4. Documentación clara y completa.

---

### **Notas importantes:**
- Los grupos de **dos integrantes** deben completar las ramas `matriz-inicial` y `busqueda-numero`.
- Los grupos de **tres integrantes** deben completar las tres ramas: `matriz-inicial`, `busqueda-numero` y `suma-matriz`.
