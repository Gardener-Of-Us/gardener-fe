pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'npm run build'
        echo 'npm build'
      }
    }

    stage('docker-image-create') {
      steps {
        sh 'docker build -t gardener-fe:0.1 .'
        echo 'docker image create'
      }
    }

    stage('docker-container-exec') {
      steps {
        sh 'docker run -d --name my-react-app -p 8300:80 gardener-fe:0.1'
        sh 'docker ps -a'
        echo 'docker container exec'
      }
    }

  }
}