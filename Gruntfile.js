module.exports = function(grunt){
    // Configurações das tarefas
    grunt.initConfig({
        less: {
            development: {
                files: {
                    // Compilar main.less em build/main.css
                    'build/styles/main.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            styles: {
              files: ['src/styles/*.less'], // Monitorar todos os arquivos .less em src/styles
              tasks: ['less', 'cssmin'], // Executar as tarefas LESS e CSSMin ao detectar mudanças
              options: {
                spawn: false, // Melhor performance
              },
            }
        },
        scripts: {
            files: ['src/scripts/*.js'], // Monitorando todos os arquivos js
            tasks: ['uglify'], // Executar a tarefa Uglify ao detectar mudanças
            options: {
                spawn: false,
            }
        },
        uglify: {
            target: {
                files: {
                    // Minifica o arquivo JavaScript e salva na pasta build
                    'build/scripts/main.min.js': 'src/scripts/index.js'
                }
            }
        }, 
        cssmin: {
            target: {
                files: {
                    'build/styles/main.min.css': 'build/styles/main.css'
                }
            }
        }
    });
    // Carregar o plugin do LESS
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Registrar a tarefa padrão (default)
    grunt.registerTask('default', ['less', 'uglify', 'cssmin', 'watch',]);
}