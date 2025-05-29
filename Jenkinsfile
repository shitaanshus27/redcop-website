pipeline {
  agent any

  tools {
    nodejs 'NodeJS_18'  // Make sure this is configured in Jenkins Global Tools
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
