pipeline {
  agent none
  stages {

    stage('Hello') {
      steps {        
        echo 'hello from Jenkinsfile'
      }
    }

    stage('build') {
      steps {
        sh 'npm install'
        echo 'npm build'
      }
    }
  }
}