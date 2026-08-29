pipeline {
    agent any

    triggers {
        // Poll SCM or pair with a GitHub/GitLab Webhook
        pollSCM('H/5 * * * *')
    }

    environment {
        PORT = '3000'
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                // Check out the main branch
                git branch: 'main', url: 'https://github.com/Apfirebolt/vue-anime-quotes.git'
            }
        }

        stage('Install & Build') {
            steps {
                sh '''
                    echo "Installing dependencies..."
                    npm ci

                    echo "Building Vue TypeScript app..."
                    npm run build
                '''
            }
        }

        stage('Deploy & Serve') {
            steps {
                sh '''
                    echo "Starting / Reloading Express server with PM2 on port 3000..."
                    pm2 startOrReload ecosystem.config.cjs || pm2 start server.js --name "anime-quotes" --env PORT=3000
                    pm2 save
                '''
            }
        }
    }

    post {
        success {
            echo "Successfully built and deployed on http://localhost:3000"
        }
        failure {
            echo "Build or deployment failed."
        }
    }
}