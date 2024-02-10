        class ContentVisitor {
            visitChildContent(content) {
                this.displayContent(content, "child-content");
            }

            visitPreteenContent(content) {
                this.displayContent(content, "preteen-content");
            }

            visitTeenContent(content) {
                this.displayContent(content, "teen-content");
            }

            visitYoungAdultContent(content) {
                this.displayContent(content, "young-adult-content");
            }

            visitAdultContent(content) {
                this.displayContent(content, "adult-content");
            }

            displayContent(content, categoryClass) {
                const outputDiv = document.getElementById('output');
                if (outputDiv) {
                    outputDiv.innerHTML = `<div class="${categoryClass}">
                        <h2>${categoryClass}</h2>
                        <p>${content}</p>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name"><br>
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email"><br>
                        <button onclick="submitForm()">Submit</button>
                    </div>`;
                }
            }
        }

        class Webpage {
            accept(visitor) {
                console.error("accept method must be implemented by concrete subclasses");
            }
        }

        class HomePage extends Webpage {
            accept(visitor) {
                visitor.visitChildContent("Homepage for Children. Enjoy fun games and educational content!");
            }
        }

        class PreteenPage extends Webpage {
            accept(visitor) {
                visitor.visitPreteenContent("Preteen Page with Content. Explore exciting stories and quizzes!");
            }
        }

        class TeenPage extends Webpage {
            accept(visitor) {
                visitor.visitTeenContent("Teen Page with Content. Dive into interesting articles and challenges!");
            }
        }

        class YoungAdultPage extends Webpage {
            accept(visitor) {
                visitor.visitYoungAdultContent("Young Adult Page with Content. Discover career insights and lifestyle tips!");
            }
        }

        class AdultPage extends Webpage {
            accept(visitor) {
                visitor.visitAdultContent("Adult Page with Content. Stay updated with news and engage in discussions!");
            }
        }

        function submitForm() {
            alert("Form submitted!");
        }

        const age = prompt("Please enter your age:");
        let visitor;

        if (age < 6) {
            visitor = new ContentVisitor();
            const homepage = new HomePage();
            homepage.accept(visitor);
        } else if (age < 12) {
            visitor = new ContentVisitor();
            const preteenPage = new PreteenPage();
            preteenPage.accept(visitor);
        } else if (age < 18) {
            visitor = new ContentVisitor();
            const teenPage = new TeenPage();
            teenPage.accept(visitor);
        } else if (age < 25) {
            visitor = new ContentVisitor();
            const youngAdultPage = new YoungAdultPage();
            youngAdultPage.accept(visitor);
        } else {
            visitor = new ContentVisitor();
            const adultPage = new AdultPage();
            adultPage.accept(visitor);
        }
    
