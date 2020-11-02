pipeline {
   agent any
   
   

   stages {
      
      
      
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
