pipeline {
    agent any
    environment {     
    DOCKERHUB_CREDENTIALS= credentials('dockerhubcredentials')     
    } 

    stages {
        stage('Build') {
            steps {
                sh 'docker system prune -a -f'
                echo 'Building..'
                sh 'docker-compose build'
            }
        }
        stage('Login to Docker Hub') {      	
            steps{                       	
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | sudo docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'                		
                echo 'Login Completed'      
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