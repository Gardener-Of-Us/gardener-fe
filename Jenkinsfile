pipeline {
  agent any
  stages {

    stage('Hello') {
      steps {        
        echo 'hello from Jenkinsfile'
      }
    }

    stage('build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
        echo 'npm build'
      }
    }
  }
}