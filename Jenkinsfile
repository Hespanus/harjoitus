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
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'                		
                echo 'Login Completed'      
            }           
        }   
        stage('Push to Docker Hub') {      	
            steps{                       	
                sh 'docker push heikkitanhi/harjoitus_frontend'
                sh 'docker push heikkitanhi/harjoitus_backend'                		
                echo 'Push completed'
                sh 'docker logout'      
            }           
        }   
        
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'docker-compose down'
            }
        }
        
        stage('rabbit message') {
            steps {
                rabbitMQPublisher conversion: false, data: 'testi', exchange: '', rabbitName: 'rabbitmq', routingKey: ''
            }
        }



    }

}