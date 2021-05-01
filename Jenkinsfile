pipeline {
  agent {label "linux"}
  stages {
    
    stage('Hello') {
      steps {        
        echo 'hello from Jenkinsfile'
      }
    }

    stage('build') {
      steps {
        sh 'npm install''
        echo 'npm build''
      }
    }
  }
}