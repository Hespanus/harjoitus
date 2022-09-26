pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'docker-compose up'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'docker-compose down'
            }
        }
    }

}