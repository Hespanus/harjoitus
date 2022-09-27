pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker system prune -a'
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