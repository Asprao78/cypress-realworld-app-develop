pipeline {
   agent any
   
   

   stages {
      
      stage('Stage-01: Cloning Git'){
          steps{
              git credentialsId: '24f4e10e-78cf-4092-83f7-0bacd3d70e5e', url: 'https://github.com/Asprao78/cypress-realworld-app-develop.git'
          }
      }
      
      stage('Stage-02: Run The tests'){
          steps{
              nodejs('Node12'){
                bat 'yarn cypress:run'    
              }
          }
          
      }
      stage('Stage-03: Post Test'){
          
          steps{
              nodejs('Node12'){
               bat 'yarn posttest'    
              }
              
          }
          
      }
   }
}
