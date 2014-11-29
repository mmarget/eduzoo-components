eduzoo-app
==========

Element providing scaffold for eduZOOs.

Apply custom color to titlebar by adding to css:

        eduzoo-app::shadow core-toolbar {
            background-color: #add8e6;
        }

##### Example

        <eduzoo-app zooTitle="Demo Zoo"
                    courseName="educationZEN presents eduZOO"
                 >
            Body content...

             <eduzoo-exhibit>
                 Exhibits integrate seamless
             </eduzoo-exhibit>

             .. more content ...

             <eduzoo-quiz quiztype="single-choice" question="Cool?">
                 <eduzoo-quiz-choice>no</eduzoo-quiz-choice>
                 <eduzoo-quiz-choice correct>yes</eduzoo-quiz-choice>
             </eduzoo-quiz>

         </eduzoo-app>