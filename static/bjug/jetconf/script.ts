import * as fs from "fs";

const baseImgPath = "./images/";

const andrus_adamchik: Speaker = {
    name: "Andrus Adamchik",
    bio: `<strong>Andrus</strong> is a member of the Apache Software Foundation and a passionate open source developer. He started programming in Java back in 1998, founding a number of open-source projects since then. The first notable project was <a href="http://cayenne.apache.org" target="_blank">Apache Cayenne</a>, a developer-friendly ORM. More recently he created <a href="http://linkrest.io" target="_blank">LinkRest</a>, a framework for model-driven REST data services and <a href="http://bootique.io" target="_blank">Bootique</a>, a minimally-opinionated technology for building runnable Java applications. In his dayjob he is an IT entrepreneur, running a great software company called <a href="http://objectstyle.com/ObjectStyle" target="_blank">ObjectStyle</a>.`,
    image: `andrus_adamchik.jpg`
};
const jeanfrancois_arcand: Speaker = {
    name: "Jean-Francois Arcand",
    bio: `<strong>Jeanfrancois</strong> is the co-founder and CTO at <a href="http://yulplay.com" target="_blank">Yulplay</a>, the creator of <a href="http://doodgame.com" target="_blank">Doodgame</a>, the ultimate real time app for sport fans! <strong>Jeanfrancois</strong> is the creator of <a href="https://github.com/jfarcand/atmosphere" target="_blank">Atmosphere</a>, a framework for building powerful websockets and asynchronous applications. The Atmosphere Framework is integrated by more than 50 Java frameworks and libraries, and heavily used all around the world. He is also the author of the <a href="https://github.com/jfarcand/Grizzly" target="_blank">Grizzly Framework</a>, the powerful NIO front end used by GlassFish/Payara and the creator of <a href="https://github.com/jfarcand/WCS" target="_blank">WCS</a>, an asynchronous HTTP/WebSocket client library. All his projects are open source and available <a href="https://github.com/jfarcand" target="_blank">here</a>`,
    image: `jeanfrancois_arcand.jpg`
};
const jeremie_papillon: Speaker = {
    name: "Jeremie Papillon",
    bio: `<strong>Jeremie</strong> is the Lead Mobile Developer at <a href="http://yulplay.com" target="_blank">Yulplay</a>, the creators of <a href="http://doodgame.com" target="_blank">Doodgame</a> (the ultimate app for sport fans). He's passionate about React and React Native, and has been working for the past year on building and optimizing a real-time mobile app using WebSockets and a Java back-end server. He keeps himself up-to-date with technology and always wants to learn new stuff. On a side note, he's Canadian (yes, he plays ice hockey) and he wants to discover new beers and the world!`,
    image: `jeremie_papillon.jpg`
};
const tagir_valeev: Speaker = {
    name: "Tagir Valeev",
    bio: `<strong>Tagir</strong> is the author of <a href="https://github.com/amaembo/streamex" target="_blank">StreamEx</a>, very useful Java 8 Stream extension library that adds additional parallelism features on top of standard streams. He’s a speaker at conferences, and has contributed a dozen of patches into OpenJDK Stream API (including bug fixes, performance optimizations and new features). He’s interested in static code analysis and works on a new Java bytecode <a href="https://github.com/amaembo/huntbugs" target="_blank">analyzer</a>.`,
    image: `tagir_valeev.jpg`
};
const volker_simonis: Speaker = {
    name: "Volker Simonis",
    bio: `<strong>Volker</strong> works for SAP in the SAP JVM Technology group. <a href="http://openjdk.java.net" target="_blank">OpenJDK</a> contributor from the very beginning and helped SAP and the SAP JVM team engage in the OpenJDK project. Currently, he's the Project Lead of the OpenJDK PowerPC/AIX and s390x porting projects, a JDK8 committer and JDK9 reviewer. He also represents SAP in the JCP.`,
    image: `volker_simonis.jpg`
};
const tomasz_nurkiewicz: Speaker = {
    name: "Tomasz Nurkiewicz",
    bio: `<strong>Tomasz</strong> spent half of his life on programming, for the last decade professionally in Java land. Loves back-end, tolerates JavaScript. Passionate about alternative JVM languages. Disappointed with the quality of software written these days (so often by himself!), hates long methods and hidden side effects. Interested in charting, data analysis and reporting. Believes that computers were invented so that developers can automate boring and repetitive tasks. Also their own. <br/> On a daily basis works in financial sector. Involved in open-source, DZone’s Most Valuable Blogger, used to be very active on StackOverflow. Author, trainer, conference speaker, technical reviewer, runner. Claims that code not tested automatically is not a feature but just a rumour. Currently writing a book <a href="http://shop.oreilly.com/product/0636920042228.do" target="_blank">Reactive Programming with RxJava</a> for O'Reilly.`,
    image: `tomasz_nurkiewicz.jpg`
};
const rustam_mehmandarov: Speaker = {
    name: "Rustam Mehmandarov",
    bio: `<strong>Rustam</strong> is the leader of the Norwegian Java User Group - <a href="http://java.no" target="_blank">javaBin</a>, and a competency network coordinator for databases and information management at work. One of the organizers of <a href="https://javazone.no" target="_blank">JavaZone</a> and <a href="http://ariot.no" target="_blank">Arctic IoT Challenge</a>. Speaker. He holds a master’s degree in Computer Science from the University of Oslo, and he has been working as a developer, lead programmer and architect for over 10 years. In addition to being passionate about agile development, web development, architecture and geographical information systems, he is also a guru of both Linux and Windows worlds. On his spare time he enjoys working out, as well as coding in Python and Java (but not simultaneously). Rustam frequently speaks at both national and international conferences, and events at various Norwegian universities.`,
    image: `rustam_mehmandarov.jpg`
};
const philipp_krenn: Speaker = {
    name: "Philipp Krenn",
    bio: `<strong>Philipp</strong> is a Developer Advocate at Elastic, spreading the love and knowledge of full-text search, analytics, and real-time data. He is a frequent speaker at conferences and meetups about all things search & analytics, databases, cloud computing, and devops. Philipp lives in Vienna where he enjoys experimenting with software, organizing meetups, and sports.`,
    image: `philipp_krenn.jpg`
};
const nikita_lipsky: Speaker = {
    name: "Nikita Lipsky",
    bio: `<strong>Nikita</strong> is an initiator and a product lead of Excelsior JET project – certified Java SE implementation (JVM) with AOT compiler developed by Excelsior LLC. Working on the project since 1997 he took part in almost every activity of the project from the JVM core to product management and support. He is also experimenting (in a spare time) with open source projects exploring approaches and a concept of the next web.`,
    image: `nikita_lipsky.jpg`
};
const tomer_gabel: Speaker = {
    name: "Tomer Gabel",
    bio: `<strong>Tomer</strong> is a programming junkie and computer history aficionado. Tomer's been around the block a few times before settling at <a href="http://ru.wix.com" target="_blank">Wix</a> as a system architect. In the last few of years he's developed a major crush on Scala, promoting it within the Israeli software industry as part of <a href="http://meetup.com/JavaIL" target="_blank">Java.IL</a> (Israeli Java user group) and <a href="https://groups.google.com/forum/#!forum/underscore-il" target="_blank">Underscore</a> (Israeli Scala user group) and organizing the annual  <a href="http://scalapeno.org.il" target="_blank">Scalapeño</a> conference in Tel-Aviv.`,
    image: `tomer_gabel.jpg`
};
const axel_fontaine: Speaker = {
    name: "Axel Fontaine",
    bio: `<strong>Axel</strong> is the founder and CEO of <a href="https://boxfuse.com" target="_blank">Boxfuse</a>, the easiest way to deploy JVM, Node.js and Go applications to AWS. He is also the creator and project lead of <a href="https://flywaydb.org" target="_blank">Flyway</a>, the open-source tool that makes database migration easy. <br/> He is a Continuous Delivery and Immutable Infrastructure expert, a Java Champion, a JavaOne Rockstar and a regular speaker at many large international conferences. You can find him online at <a href="https://axelfontaine.com" target="_blank">axelfontaine.com</a> and on <a href="https://twitter.com/axelfontaine" target="_blank">Twitter</a>`,
    image: `axel_fontaine.jpg`
};
const jaroslaw_ratajski: Speaker = {
    name: "Jaroslaw Ratajski",
    bio: `He is a wizard. - He keeps systems alive even if they should not. <br/> He is an architect. - He will show you how to code without design patterns, big JEE servers, databases and all that useless stuff. <br/> He is a hacker. - He likes doing things you people wouldn't believe. <br/> He is a leader. - He only lets the team do their job. <br/> He is a detective. - He will find the problem ... even if there are not many clues. <br/> He is an engineer. - He will keep your JVM at top speed.`,
    image: `jaroslaw_ratajski.jpg`
};
const vladislav_zablotsky: Speaker = {
    name: "Vladislav Zablotsky",
    bio: `Vladislav came a long way from non IT guy to team lead. His path to Java was not so easy. He adapted html markup and debugged JavaScript using only alerts for IE6. Also he is guilty in php coding. At last he found himself in Java and looks like this ecosystem pretty comfortable for him. He doesn't want to stop, just need to move forward, develop skills, learn something new.`,
    image: `vladislav_zablotsky.jpg`
};
const yegor_bugayenko: Speaker = {
    name: "Yegor Bugayenko",
    bio: `Yegor is a CTO and co-founder of Teamed.io, a software development company with a unique approach to management of distributed teams; a regular blogger at <a href="http://yegor256.com" target="_blank">yegor256.com</a>; a proud holder of PMP and OCMEA certifications;a hands-on Java developer and a lead architect of a few popular open source projects, including <a href="http://jcabi.com" target="_blank">jcabi.com</a>, <a href="http://takes.org" target="_blank">takes.org</a>, <a href="http://rultor.com" target="_blank">rultor.com</a> and <a href="http://qulice.com" target="_blank">qulice.com</a>. All ideas that he is trying to spread you can find at this wonderful <a href="http://www.yegor256.com/elegant-objects.html" target="_blank">book</a>. `,
    image: "yegor_bugayenko.jpg"
};
const baruch_sadogursky: Speaker = {
    name: "Baruch Sadogursky",
    bio: `Baruch is the developer advocate of JFrog, the creators of Artifactory Binary Repository and the home of Bintray. He was a winner of the JavaOne Duke's Choice Award in 2011 and 2013. For a living Baruch hangs out with JFrog tech leaders, writes some code around Artifactory and Bintray, and then speaks and blogs about all that. He has done this repeatedly for the last dozen years and enjoys every moment of it. Baruch's blog posts can be read at <a href="http://jfrog.com/blog/" target="_blank">blog</a> and his speaker history can be found at <a href="http://lanyrd.com/profile/jbaruch/sessions/" target="_blank">lanyrd</a>.`,
    image: "baruch_sadogursky.jpg"
};
const kirill_tolkachev: Speaker = {
    name: "Kirill Tolkachev",
    bio: `Principal Developer at Alfa-Laboratory. Kirill designs and develops different APIs for bank products. He builds principles and sets of instruments for building and adopting microservices architecture in the company. Familiar with DevOps methodology and has much experience with it. Big fan of Groovy, Gradle, Spring and Netflix OSS stack. Permanent resident of Razbor-Poletov podcast.`,
    image: "kirill_tolkachev.jpg"
};
const alparslan_avci: Speaker = {
    name: "Alparslan Avci",
    bio: `Alparslan works for Hazelcast as a Senior Solutions Architect. He is a passionate Java developer, and loves to think in distributed and object-oriented way. Prior to joining Hazelcast, Alparslan worked in several Java projects including a web search engine and enterprise financial anti-fraud solutions. He also contributes to open-source projects like Apache Nutch and currently a PMC member in Apache Gora. Alparslan holds a MS degree in Software Engineering of Distributed Systems from Kungliga tekniska hogskolan in Stockholm, Sweden.`,
    image: "alparslan_avci.jpg"
};
const alexey_zinoviev: Speaker = {
    name: "Alexey Zinoviev",
    bio: `Passionate data mining and backend application developer. <br/> Work projects are related to Java web-frameworks, Highload, NoSQL technologies. <br/>Possibilities of the Hadoop/Spark projects are used for data processing. Research projects are related to large-scale road graph data processing, social network analysis, data mining, machine learning, traffic jams prediction, mathematical models of complex systems. <br/> He is leader of the Google Developer Group in Russia and a Joker/Mobius program committee member. Also, he organized Java, Android conferences and GDG DevFest in Omsk during 2013-14. Now he is working in EPAM as Senior Training and Development Specialist.`,
    image: "alexey_zinoviev.jpg"
};
const jaroslaw_palka: Speaker = {
    name: "Jaroslaw Palka",
    bio: `Jaroslaw has spent last 15 years of my life in IT working as database and system administrator, developer, architect, manager and "on site disaster engineer". At the moment he works as code mangler at Allegro, recovering from long journey as chief architect of a large SaaS platform for HR solutions. He was involved in small, medium and horribly and nonsense large systems, from "waterfall" through Agile to "no methodology" methodology. It all lead him to conclusion that it doesn't matter what you do as long as you do it right, keep it simple and use the right tool to do the job for you. In the meantime he fell in love it TDD and Software Craftsmanship, explored architectures and design of legacy systems and was trapped inside JVM, till death do as apart. He also spent a lot of time exploring ideas like system thinking, system dynamics, strange attractor and complexity theory. From time to time you can hear his low quality jokes about architecture at conferences in Poland. He is also trying to make a world a better place as blog author at <a href="http://geekyprimitives.wordpress.com" target="_blank">GeekyPrimitives</a>, trainer at <a href="http://symentis.pl" target="_blank">Symentis</a> and program committee lead at 4Developers and JDD conferences.`,
    image: "jaroslaw_palka.jpg"
};
const duyhai_doan: Speaker = {
    name: "DuyHai Doan",
    bio: `DuyHai Doan is a Cassandra technical advocate. He spends his time between technical presentations/meetups on Cassandra, coding on open source projects to support the community and helping all companies using Cassandra to make their project successful. Previously he was working as a freelance Java/Cassandra consultant.`,
    image: "duyhai_doan.jpg"
};
const nicolas_frankel: Speaker = {
    name: "Nicolas Frankel",
    bio: `Nikolas is Software Architect with 15 years experience consulting for many different customers, in a wide range of contexts (such as telecoms, banking, insurances, large retail and public sector). Usually working on Java/Java EE and Spring technologies, but with narrower interests like Software Quality, Build Processes and Rich Internet Applications. Currently working for an eCommerce solution vendor leader. Also double as a teacher in universities and higher education schools, a trainer and triples as a book author.`,
    image: "nicolas_frankel.jpg"
};
const alexey_buzdin: Speaker = {
    name: "Alexey Buzdin",
    bio: `Alexey is a passionate full-stack developer and trainer that is into cross-platform mobile tech. He always looks forward to talk about various technologies, technical challenges and share his opinion about them. High chance that you can see him speaking or stalking in pretty much all developers communities in Riga, Latvia (JUG.lv, LDN, Devclub, LatCraft etc). In addition he is also an organizer of <a href="http://gdgriga.lv" target="_blank">Google Developers Group Riga</a> that hosts monthly meetups about IT and tech.`,
    image: "alexey_buzdin.jpg"
};
const tomasz_borek: Speaker = {
    name: "Tomasz Borek",
    bio: `Tomasz is a coder from Poland. Hoping to learn something new every day. <br/> Thankful to everybody who helps him while he hops along. <br/> Proud of <a href="http://sckrk.com" target="_blank">SCKRK</a> and <a href="http://geecon.org" target="_blank">GeeCON</a>. Co-leads: SCKRK, Polish JUG, Lambda Lounge Krakow. He is a flawed human, and unafraid to say so. <br/> Into: people, software, music, role-playing, honesty, learning. <br/> Dislikes: doing unnecessary things, doing "because I can".`,
    image: "tomasz_borek.jpg"
};
const sebastian_malaca: Speaker = {
    name: "Sebastian Malaca",
    bio: `Sebastian is an experienced and dedicated software engineer specializing in object-oriented design and programming, software architecture, code quality and agile. His interests include testing, programming, software engineering and agile software craftsmanship. He's also a speaker (JDD, GeeCon, NDC), writer and contributor to several blogs (DZone, JavaCodeGeeks) about Software Development and Agile Software Craftsmanship.`,
    image: "sebastian_malaca.jpg"
};
const dmitry_jemerov: Speaker = {
    name: "Dmitry Jemerov",
    bio: `Dmitry Jemerov has been working with JetBrains since 2003 and has participated into the development of many products, including IntelliJ IDEA, PyCharm, WebStorm and others. He was also one of earliest contributors to Kotlin. Right now he leads the team working on the Kotlin IntelliJ IDEA plugin, as well as writing a book on Kotlin in co-authorship with Svetlana Isakova.`,
    image: "dmitry_jemerov.jpg"
};
const anton_keks: Speaker = {
    name: "Anton Keks",
    bio: `Anton Keks is a software craftsman, co-founder of Codeborne, the only extreme programming shop in the region, frequent speaker at conferences, and a lecturer in Tallinn Technical University. He is also a strong believer in open-source software and agile development methodologies, author of a popular network tool - Angry IP Scanner, and a regular contributor to other open-source projects. Before founding Codeborne, Anton has led a team of developers of the award-winning internet-bank of Swedbank for 5 years, gradually introducing agile methods. During this time he has also co-founded Agile Estonia non-profit organization that organizes regular agile conferences in Estonia. During spare time he plays guitar, rides motorbike and travels to remote corners of the world.`,
    image: "anton_keks.jpg"
};
const ruslan_ibragimov: Speaker = {
    name: "Ruslan Ibragimov",
    bio: `Ruslan is a leader of <a href="https://bkug.by/" target="_blank">Belarus Kotlin User Group</a> and <a href="https://jprof.by/" target="_blank">Java Professionals By</a> driver, team leader at Itransition. Every day he reads news and articles from more than 500 sources using RSS. He likes to explore new technologies and aspires to get a deep understanding of the problem. Hackathons, meetups and conferences? Yes this is about him. Linux and other Free Software - runs the world.`,
    image: "ruslan_ibragimov.jpg"
};
const bruce_eckel: Speaker = {
    name: "Bruce Eckel",
    bio: `<a href="http://bruceeckel.com"> Bruce Eckel </a> is the author (with Dianne Marsh) of Atomic Scala, Thinking in Java (Prentice-Hall, 1998, 2nd Edition, 2000, 3rd Edition, 2003, 4th Edition, 2006), the Hands-On Java eSeminar (available on the Web site), Thinking in C++ (PH 1995; 2nd edition 2000, Volume 2 with Chuck Allison, 2003), C++ Inside & Out (Osborne/McGraw-Hill 1993), and First Steps in Flex (with James Ward, 2008) among others. He's given hundreds of presentations throughout the world, published over 150 articles in numerous magazines, was a founding member of the ANSI/ISO C++ committee and speaks regularly at conferences. He was for many years the chair of both the C++ and Java tracks at the Software Development conference, is cofounder of the JavaPosse Roundup Conference and creator of the Scala Summit Conference. He provides public and private training and consulting in programming languages and software system design.`,
    image: "bruce_eckel.jpg"
};
const evgeny_borisov: Speaker = {
    name: "Evgeny Borisov",
    bio: `Since 2001 Evgeny was working as Java Developer, Team Leader, Java Architect and Java Trainer. Today he has his own consulting company.`,
    image: "evgeny_borisov.jpg"
};
const mikalai_alimenkou: Speaker = {
    name: "Mikalai Alimenkou",
    bio: `Java Tech Lead and experienced coach. Expert in Java development, scalable architecture, Agile engineering practices and project management. Having more than 11 years of development experience, specializes on complex distributed scalable systems. Active participant and speaker of many international conferences. Founder and coach in training center XP Injection. Works at Epam. Organizer and founder of Selenium Camp, JEEConf, XP Days Ukraine and IT Brunch conferences. Founder of active "Anonymous developers club" (uadevclub).`,
    image: "mikalai_alimenkou.jpg"
};
const uladzimir_liashkevich: Speaker = {
    name: "Uladzimir Liashkevich",
    bio: `Uladzimir is working with Java technologies since 2003. Nowadays mostly deals with big data and highly scalable systems. Also has always been interested in organizational level decisions and engineering practices that have positive impact on developers' productivity. <br/> Currently serves as CTO at Geomotiv, AdTech and TV advertising technology company.`,
    image: "uladzimir_liashkevich.jpg"
};
const rafael_winterhalter: Speaker = {
    name: "Rafael Winterhalter",
    bio: `Rafael works as a software engineer in Oslo, Norway. He is a proponent of static typing and a JVM enthusiast with particular interests in code instrumentation, concurrency and functional programming. Rafael blogs about software development, regularly presents at conferences and was pronounced a Java One Rock Star. When coding outside of his work place, he contributes to a wide range of open source projects and often works on Byte Buddy, a library for simple runtime code generation for the Java virtual machine.`,
    image: "rafael_winterhalter.jpg"
};
const alexey_fyodorov: Speaker = {
    name: "Alexey Fyodorov",
    bio: `Java developer for 8+ years. Worked for Oracle for 3 years (JCK Team, Java Platform group). Leader of the St. Petersburg Java User Group, and CodeFreeze community, organizer of Russian Java conferences JPoint and Joker. Interested in Java runtime, multithreaded programming, Java compatibility and software engineering trade-offs. Since 2015 Technology Evangelist at Odnoklassniki.`,
    image: "alexey_fyodorov.jpg"
};
const andrei_pangin: Speaker = {
    name: "Andrei Pangin",
    bio: `Andrei is a lead software engineer at Mail.Ru Group. In efforts to build a fast and reliable platform for <a href="http://ok.ru">OK.RU</a> social network he squeezes every cycle out of the Java server performance. Andrei's past experience at Sun Microsystems helps him to investigate Java Virtual Machine bugs and even to patch OpenJDK. He knows no limits in hacking Java and playing with undocumented APIs. These experiments are reflected in Andrei's presentations on Java internals. They’ve also inspired the project “one-nio” - the open-source framework for developing high-loaded servers in Java.`,
    image: "andrei_pangin.jpg"
};
const roman_grebennikov: Speaker = {
    name: "Roman Grebennikov",
    bio: `Co-founder and distributed systems developer in Sociohub, activist of Voronezh Scala User Group. Went a long professional way from a graphics designer and C++ HFT developer to a Scala fanboy.`,
    image: "roman_grebennikov.jpg"
};
const adam_warski: Speaker = {
    name: "Adam Warski",
    bio: `Adam is one of the co-founders of SoftwareMill, where he codes mainly using Scala and other interesting technologies. Adam is involved in open-source projects, such as Supler, Macwire, Hibernate Envers and ElasticMQ. He has been a speaker at major conferences, such as JavaOne, Devoxx, JavaZone or JFokus. <br/> <br/> Apart from writing closed- and open-source software, in his free time he tries to read the Internet on various programming-related subjects, any ideas or insights end up on his <a href="http://www.warski.org/blog">blog</a>.`,
    image: "adam_warski.jpg"
};
const alexander_slesarenko: Speaker = {
    name: "Alexander Slesarenko",
    bio: `Alexander is a principal engineer at Huawei Research Center in Moscow. He is leading the Scalan project - a framework for creating high-performance DSLs in Scala. He also worked in the IT industry as software architect for several years.`,
    image: "alexander_slesarenko.jpg"
};

const sessions: Session[] = [
    {
        topic: "RESTful Data Services with LinkRest : Building / Securing / Optimizing",
        date: "Nov 2016",
        speakers: [andrus_adamchik],
        abstract: `<a href="http://linkrest.io" target="_blank">LinkRest</a> is a small HTTP-based protocol and a Java framework that rethinks how REST APIs should be built. It turns each API endpoint into a graph query engine, giving client full control over the shape and contents of the requested data sets. The talk will start with the easy parts – how to reuse an existing ORM model (Apache Cayenne) and write simple Java one-liners to get a REST service up and running. Then we will delve into more advanced topics: alternative backends, graph access security and parallel data processing.`
    },
    {
        topic: "Building WebSockets Gaming Applications using the Atmosphere Framework",
        date: "Nov 2016",
        speakers: [jeanfrancois_arcand, jeremie_papillon],
        abstract: `This session will illustrate the Atmosphere Framework's concepts by building a reactive gaming application using WebSockets, Atmosphere, React Native and the Netty I/O Framework. First, we will explain how to implement an Atmosphere's WebSocketProcessor API as a foundation for a real time gaming application. Second, we will demonstrate how to use javax.inject for building injection of any kind of objects inside our WebSocketProcessor. Next we will use Doodgame, a real time gaming application developped by Yulplay.com, available on IOS and Android, to demonstrate how quickly a client can be build hooked to our new WebSocketProcessor. We will conclude with performance tips and tricks when building WebSocket applications using Atmosphere.`
    },
    {
        topic: "Weird Stream API",
        date: "Nov 2016",
        speakers: [tagir_valeev],
        abstract: `Java 8 Stream API is already here for a couple of years and programmers use it widely. However under the hood of magical API you can discover the plain Java code with has its own bugs, weirdness and whims. We will take a look on some code snippets which may unexpectedly show poor performance or strange behavior. Also we will extend Stream API with new intermediate operation trying to achieve the best performance.`
    },
    {
        topic: "HotSpot Intrinsics",
        date: "Nov 2016",
        speakers: [volker_simonis],
        abstract: `By definition, intrinsics are functions which are handled specially by the compiler or the VM. The HotSpot virtual machine supports intrinsics for specific API functions in the interpreter as well as in the C1 and C2 JIT compilers. In general, intrinsics are a great possibility for optimization. But they also come at a certain cost. <br/> <br/> First of all, they are inherently platform and implementation dependent. If available, they can lead to consistency problems if they are implemented differently in the interpreter and the JIT compilers. Finally, they can change the program control (e.g. safepoint behavior) and observability (e.g. profiling, instrumentation) in subtle ways. <br/> <br/> This talk will give you a short deep dive into the HotSpot Virtual Machine using the example of HotSpot intrinsics. It will explain how they are implemented and the implications this has for the Java VM. Finally, it will demonstrate how you can add a new intrinsic for your favorite Java method.`
    },
    {
        topic: "RxJava in legacy projects",
        date: "Nov 2016",
        speakers: [tomasz_nurkiewicz],
        abstract: `If you ever approached RxJava before you might come to a conclusion that this library solves problems most of us don't have. Reactively composing streams of data, virtual time, marble diagrams and event-driven programming - where most of our code is pretty much just transferring data from database to presentation layer. <br/> During this live coding session there will not be a single slide, we start with empty IDE to step-by-step implement key constructs in RxJava. Most importantly we will discover how this high-level abstraction can help in existing projects. When to use RxJava, what problems does it solve and when using it is an excess of form over substance. <br/> We will learn how to build highly reliable and concurrent applications, improve throughput and resource utilization without hurting readability and avoiding complexity.`
    },
    {
        topic: "Field Notes of a Command Line Ninja",
        date: "Nov 2016",
        speakers: [rustam_mehmandarov],
        abstract: `Ever wished you had superpowers? Ninja superpowers! So you can move swiftly across the keyboard, enjoy an arsenal of effective tools, and make tedious and mundane tasks fun? <br/> Have you ever witnessed someone write fancy commands and perform magic from the console. Have you ever wished you could learn, or brush up on, those skills too? Maybe you want to be more effective at your everyday tasks, or need a new topic for the next family dinner? <br/> Join us and learn some awesome command line ninja skills. You will be able to find something new no matter your level of experience. The audience will get a chance to show off their skills as well! <br/> You can bring your PC/Mac with you and hack-along! Linux, Mac or Windows (with Cygwin).`
    },
    {
        topic: "Full-Text Search Explained",
        date: "Nov 2016",
        speakers: [philipp_krenn],
        abstract: `Today’s applications are expected to provide powerful full-text search. But how does that work in general and how do I implement it on my site or in my application? <br/> Actually, this is not as hard as it sounds at first. This talk covers: <ul><li> How full-text search works in general and what the differences to databases are. </li> <li> How the score or quality of a search result is calculated. </li> <li> How to implement this with Elasticsearch. </li> </ul> Attendees will learn how to add common search patterns to their applications without breaking a sweat.`
    },
    {
        topic: "Java 8 Support at the JVM Level",
        date: "Nov 2016",
        speakers: [nikita_lipsky],
        abstract: `Java SE 8 has brought lambdas, default methods, type annotations, compact profiles, etc. As a result, the Java SE platform specification was changed to reflect new features. <br/> The session shows how the new Java 8 features have been implemented in Excelsior JET JVM, written from scratch, very different from the Oracle HotSpot JVM, but compatible with the Java SE specification. <br/> As a result, an attendee will refresh his/her memory regarding new Java 8 features, will learn how they affected the JVM specification, how the lambda expressions are translated into Java bytecode and how they can be optimized at the JVM level.`
    },
    {
        topic: "How shit works: the CPU",
        date: "Nov 2016",
        speakers: [tomer_gabel],
        abstract: `The beautiful thing about software engineering is that it gives you the warm and fuzzy illusion of total understanding: I control this machine because I know how it operates. This is the result of layers upon layers of successful abstractions, which hide immense sophistication and complexity. As with any abstraction, though, these sometimes leak, and that's when a good grounding in what's under the hood pays off. <br/> <br/> The second talk in this series peels a few layers of abstraction and takes a look under the hood of our "car engine", the CPU. While hardly anyone codes in assembly language anymore, your C# or JavaScript (or Scala or...) application still ends up executing machine code instructions on a processor; that is why Java has a memory model, why memory layout still matters at scale, and why you're usually free to ignore these considerations and go about your merry way. <br/> <br/> You'll come away knowing a little bit about a lot of different moving parts under the hood; after all, isn't understanding how the machine operates what this is all about?`
    },
    {
        topic: "Immutable Infrastructure: Rise of the Machine Images",
        date: "Nov 2016",
        speakers: [axel_fontaine],
        abstract: `The cloud is the new normal and it is time to rethink how we see machines and deployments. We have been piling layer upon layer of complexity for too long. But why should it be this way? It is time to radically simplify all this. <br/> <br/> In this talk, we'll throw general-purpose operating systems, snowflake servers and runtime provisioning out the door. Instead you'll see how servers become disposable, how machine images are generated from scratch in seconds and how to achieve perfect environment parity from dev to prod. <br/> <br/> This is Immutable Infrastructure. It is a profoundly important change as to how we view and treat our systems. We'll go deep. We'll look at how this affects scaling, logging, sessions, configuration, service discovery and more. We'll also look at how containers and machine images compare and why some things you took for granted may not be necessary anymore. <br/> But beware, neither sacred cows nor kittens will be spared!`
    },
    {
        topic: "DROP DATABASE - galactic story",
        date: "Nov 2016",
        speakers: [jaroslaw_ratajski],
        abstract: `So You thought databases might be useful. I will show You why this is ridiculous idea. <br/> Database is just the thing that kill performance of you system (100 times), destroys design and pollutes code. Besides it causes a great loss of information. Really, if you care about your data do not make a mistake and do not put them into Tables, JSONs or whatever. You can do it better. <br/> During the presentations you will see how to code systems NORMALLY and compare it to weird things such as Hibernate or JPA. You will learn that best place for your data is RAM !!! :-)  And this all from the guy who was writing JEE systems with SQL (and not only) for the last 15 years. This guy (me) was even kind of evangelist for JEE, and introduced Hibernate and JPA in a few companies. (I am do sorry for that). And we will be talking about facts. Code is <a href="https://github.com/airomem/galakpizza" target="_blank"> here </a>.`
    },
    {
        topic: "JDBC based frameworks racing",
        date: "Nov 2016",
        speakers: [vladislav_zablotsky],
        abstract: `There are more and more JDBC based frameworks each year every one of them promote itself as modern, fast and better than others in any way. But how all this can be applied in real life? Do we really know what price with respect to performance for next “more handy tool”? I’ve tried to test most popular frameworks against each other: native JDBC, EclipseLink, Hibernate, SpringJDBC, SpringData, MyBatis etc.`
    },
    {
        topic: "No container: a Modern Java Stack with Bootique",
        date: "Apr 2016",
        speakers: [andrus_adamchik],
        abstract: `Java containers appeared back in the era of big expensive hardware and monolithic applications, and currently feel like an impediment to Java progress. More and more people opt out of containers in favor of runnable jars, especially with the advance of microservices architectures. Andrus Adamchik will present a new open source tool called <a href="https://github.com/nhl/bootique" target="_blank">Bootique</a>, a pluggable and extensible technology intended for various kinds of container-less Java apps - REST services, webapps, job runners, desktop apps and what not.`,
        video: "https://youtu.be/Zhe0JPQojQw",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKbm1NOVBwVHRLMjg"
    },
    {
        topic: "An Immutable Object-Oriented Web Framework",
        date: "Apr 2016",
        speakers: [yegor_bugayenko],
        abstract: `JSP, JSF, Spring, Play, Spark and many other web development frameworks are very popular, but very procedural. They don't really respect the principles of encapsulation, they are full of static methods, setters-and-getters, singletons, NULL references, and other OOP anti-patterns. Using that frameworks turn us into procedural programmers writing in Java syntax. Takes.org is a young project that is making an attempt to change the landscape of Java web frameworks, but introducing an immutable and truly OOP design into it.`,
        video: "https://youtu.be/-Y4XS7ZtQ2g",
        code: "https://github.com/yegor256/jetconf-2016"
    },
    {
        topic: "Groovy Puzzlers S03 - The Unstoppable Puzzlers Hit Again!",
        date: "Apr 2016",
        speakers: [baruch_sadogursky, kirill_tolkachev],
        abstract: `Did you think that we were out of puzzlers?! Well, we might be - but the Groovy community sure isn't! Per usual, we've got a bunch of awesomely puzzling contributions and you are going to have a shot at winning one of the prizes. Attend this session to have some fun while getting a workout in for those muscles - you'll tease your brain and then stretch out for the flying t-shirts too!`,
        video: "https://youtu.be/5RCnt53R3s8",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKUktWSUJqLTU1eXc"
    },
    {
        topic: "Standardize Caching in Java: JCache",
        date: "Apr 2016",
        speakers: [alparslan_avci],
        abstract: `The JCache is the new standardized Java caching layer API which is specified by the Java Community Process (JCP) as Java Specification Request (JSR) 107. It provides a common way for applications to use and adopt caching thus allowing developers to focus on application development and avoid the burden of implementing caches themselves. In this presentation, we will give an overview of the API itself at a glance and see what JCache brings us. Also some tips will be shared for developers which will use JCache in their applications. Lastly, a simple demo will be run to make the audience understand JCache better by using a vendor implementation of the API.`,
        video: "https://youtu.be/ZRJ14Hk5InA",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKZXdlb1hwSjI3bVE"
    },
    {
        topic: "Hadoop Jungle: the world of wild algorithms and poisonous JVMs",
        date: "Apr 2016",
        speakers: [alexey_zinoviev],
        abstract: `If you think that all deals with Hadoop cluster is only MapReduce job and Hive queries writing, you are mistaken. Incomplete utilization of JVM resources leads to the development degradation. As a result you will fire into the air a wad of money each time when your read or shuffle your data. <br/> Let's put on a pith helmet, getting vaccinated against arrogance and go chop vines of nonoptimal solutions. <br/> We'll go to the jungle and tamed the wild elephant Hadoop. Afterwards we will give an overview of different JOIN implementations. Also we'll obtain power over the redirection of data to different partitions. <br/> Okay, but seriously, during this lecture we will discuss following things: <ul><li>Hadoop and HDFS daemons as a typical Java - applications</li><li>Hadoop Java API Features</li><li>YARN containerization approach</li><li>The limits of customization in Hadoop</li><li>Different approaches to the implementation of the JOIN</li><li>Directed acyclic graph (DAG) of MR jobs</li><li>Performance tips</li><li>JVM settings what you really need</li><li>Development, debugging and testing phases</li></ul> This topic is the best choice for anyone who already know all the hassle with BigData and has some experience with the Hadoop, but wants to know more about its features.`,
        video: "https://youtu.be/5Qap5lRETM0",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKMm5KdGY0bjh5ZjA"
    },
    {
        topic: "Social networks and recommendation engines, here comes Neo4j",
        date: "Apr 2016",
        speakers: [jaroslaw_palka],
        abstract: `RDBMS, key-value stores, column family, document and time series databases, you probably know it all, played with it, used it here and there. This time I am going to show you graph database, Neo4j and how it plays nicely in such domains like social networks and recommendation engines. I truly believe graphs are the ultimate data model, which directly translates into your brain cells and the ways we human think, they are natural for us. So if you mix it powerful query language called Cypher, you could conquer the world with tricky queries. During the talk I will show two data models, my email inbox and movie recommendations, how to model them as graphs and how to build layers of information and knowledge using graphs, nodes, materialized relations and indexes.`,
        video: "https://youtu.be/Gch6Cnv0cnc"
    },
    {
        topic: "MyBatis, Thanks God not JPA",
        date: "Apr 2016",
        speakers: [vladislav_zablotsky],
        abstract: `Nowadays there are plenty different implementations over JPA. Comparing to JDBC JPA has many advantages and can simplify development in some way. But everything comes with a price. Do we really need such huge frameworks to simplify our DB interactions? The answer is No. All you need to know is SQL, MyBatis will do the rest with almost no extra coding.`,
        video: "https://youtu.be/30B7kSlVvys",
        code: "https://github.com/rumatoest/lab-mybatis",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKOWJ0SjljVVo3bDQ"
    },
    {
        topic: "Apache Cassandra 3 New Cool Features",
        date: "Apr 2016",
        speakers: [duyhai_doan],
        abstract: `Cassandra 3.0 has been released for a while, it's high time to look at the cool new features: <ol> <li>The new User Defined Functions and User Defined Aggregates which allow you to create code in the language of your choice (JVM compatible) and push the computation to the server</li><li>The JSON syntax that can be used to push data directly into Cassandra without the pain of converting JSON to regular literal values</li><li>The new Materialized Views that make de-normalization easier for the developers</li><li>The new full text search feature that will be available soon in Cassandra 3.4, allowing you to perform dynamic queries on your Cassandra data</li></ol>`,
        video: "https://youtu.be/Y_xRXCT3W60",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKMlZyM3A2SnpERVU"
    },
    {
        topic: "Apache Cayenne: Java ORM Alternative",
        date: "Apr 2016",
        speakers: [andrus_adamchik],
        abstract: `Apache Cayenne is a mature full-featured Java ORM. The presentation will talk about Cayenne approach to object persistence, including overall philosophy and the differences with JPA/Hibernate. It will highlight such things as transaction management, mapping workflow, as well as the new APIs in the latest Cayenne 4.0.`,
        video: "https://youtu.be/L6rQe0fLO_E",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKMTFZWFE4S2k4ZkU"
    },
    {
        topic: "Improve your tests quality with Mutation Testing",
        date: "Apr 2016",
        speakers: [nicolas_frankel],
        abstract: `Unit testing ensures your production code is relevant. But what does ensure your testing code is relevant? Come discover mutation testing and make sure your never forget another assert again. <br/> In the realm of testing, the code coverage metrics is the most often talked about. However, it doesn't mean that the test has been useful or even that an assert has been coded. Mutation testing is a strategy to make sure that the test code is relevant. <br/> In this talk, I will explain how Code Coverage is computed and what its inherent flaw is. Afterwards, I will describe how Mutation Testing work and how it helps pointing out code that is tested but leave out corner cases. I will also demo PIT, a Java production-grade framework that enables Mutation Testing on a simple code base. If time allows, a demo will also show how PIT can be integrated with Sonar.`,
        video: "https://youtu.be/ChdLToGtm2s",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKbUZGazFNUEtMN0k"
    },
    {
        topic: "Testing RESTful services: The What, The How and The Automated",
        date: "Apr 2016",
        speakers: [alexey_buzdin],
        abstract: `Nowadays REST is a default architectural pattern for developing web services. But with great power comes great responsibility! Let's talk about what should be pinpointed and tested on a RESTful API level, what are the tips and tricks, where you could stumble upon common problems and what are the options on writing a beautifully crafted, maintainable test suit with Java or without. Furthermore let's talk about how to automate the whole beast to fit your delivery pipeline.`,
        video: "https://youtu.be/clfkRjBGmow",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKN0UxcGhOa2NkVTQ"
    },
    {
        topic: "Advanced testing tools",
        date: "Apr 2016",
        speakers: [tomasz_borek],
        abstract: `JUnit 5.0.0-ALPHA was released on February 1st, 2016. It went forward with large strides and has incorporated number of features only TestNG had so far (grouping tests, for instance). I'd like to NOT leave the IDE and show you number of those. <br/> We'll cover parametrized testing with JUnit 5 and older, via Zohhak or JUnitParams. We'll talk about database testing with DBUnit, DataBene Benerator, LiquiBase and Spring Data. <br/ >We'll delve into interesting things like system tests (for system-wide concerns) and some tools for NON-functional requirements, like system stability or high reliability or speed. <br/> I'll cover many tools, but due to limited time, none will be covered in-depth (as each would have taken whole session if that were to happen). Each tool will be covered with less-experienced audience in mind, so that usage and benefits would be clear.`,
        video: "https://youtu.be/CRznHrZqlzc",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKdkZ1UzhjN043UjA"
    },
    {
        topic: "How to get rid of Obsession?",
        date: "Apr 2016",
        speakers: [sebastian_malaca],
        abstract: `Being obsessed means "to preoccupy or fill the mind of (someone) continually and to a troubling extent". SOLID, design patterns, KISS, DRY, GRASP, high cohesion and low coupling, refactoring, testing, code review, etc. And all of this for the sake of code's quality and maintainability. All of this for the sake of code's perfection. <br/> You have to take care of the code, but you also have to know when you can leave it as it is.`,
        video: "https://youtu.be/WUKY3hOr57g",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKanVVMk5zaWwxNlE"
    },
    {
        topic: "Kotlin: Making JVM Development Fun Again",
        date: "Apr 2016",
        speakers: [dmitry_jemerov],
        abstract: `Kotlin is a new programming language recently released by JetBrains. Kotlin's key values include pragmatism, clarity, safety and 100% Java interoperability. Kotlin works great everywhere where Java is being used today, including server-side enterprise development and Android apps. In this talk, I'll introduce you to the language and the tools which are available for it, and give you a tour of the language's syntax and main distinguishing features.`,
        video: "https://youtu.be/R0zv0vi7_wQ",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKRzBVczIwSk1wUGc"
    },
    {
        topic: "Kotlin in real projects: pragmatic opinion on pragmatic language",
        date: "Apr 2016",
        speakers: [anton_keks],
        abstract: `Kotlin is a marvelous JVM language that many have waited for. While we already have Java 8 and some people have migrated away from JVM while waiting for a more productive language, Kotlin finally is here, promising lots of good stuff, but still allowing us to use the cross-platform and highly optimized JVM and many of familiar frameworks. <br/> However, nothing comes without drawbacks. There have been some controversial decisions while designing the language that affect what is convenient to do in the language and what is not so. Moreover, Kotlin is yet to deliver many of its promises, like compilation speed. <br/> In this talk I'll talk about real life experience of using Kotlin in an Agile way, the obstacles that you may encounter and how to overcome them.`,
        video: "https://youtu.be/CABN2r4GPpQ",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKRTRtWDV0X1Ruek0"
    },
    {
        topic: "The Darkside of Kotlin",
        date: "Apr 2016",
        speakers: [ruslan_ibragimov],
        abstract: `On one hand Kotlin is a new language that has a great interoperability with Java, any Java developer can easily understand and write on Kotlin. On the other side Kotlin has introduced many new concepts which are new to Java. About these concepts we will talk during live coding.`,
        video: "https://youtu.be/fZXQjy8sdok"
    },
    {
        topic: "Caught in the Act: Kotlin Bytecode Generation and Runtime Performance",
        date: "Apr 2016",
        speakers: [dmitry_jemerov],
        abstract: `In this talk, we'll dive into the details of how various language features supported by Kotlin are translated to Java bytecode. We'll use the JMH microbenchmarking tool to study the relative performance of various constructs and to understand how we can ensure top performance of the Kotlin code that we write.`,
        video: "https://youtu.be/eQ4YHpAXdp4",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKVEpfZm1ZcFljU3c"
    },
    {
        topic: "Developing Modular Software: Welcome to Hell!",
        date: "Apr 2016",
        speakers: [baruch_sadogursky],
        abstract: `Using software modules today is the default way of working for most systems and frameworks. With the advent of many software languages and OSS frameworks, new module systems are constantly created and new module ecosystems start to prevail. This trend is horizontal and covers operating system packages, language libraries and application modules (plugins). But while some module systems are nicer to use, others are repeating past mistakes and are a daily source for developer agony and pain. In this short talk I will present the "lessons learned" at JFrog, where we make software for managing software libraries and deal with many types of module systems. This talk will show what works and what doesn't work in a module system; what features can make a module ecosystem thrive or fail; and why, despite all downsides, modules are here to stay and conquer more space as the Cloud continues to grow.`,
        video: "https://youtu.be/JqLQnmdWqwg"
    },
    {
        topic: "A Language is More Than a Language",
        date: "Apr 2015",
        speakers: [bruce_eckel],
        abstract: `In the early days, you always purchased your compiler. The language and implementation decisions were controlled by the vendor for their own ends. Programming was often an isolated process. Your code was your own. You wrote it, tested it (or not) and consumed it in relative obscurity. With the rise of open source, programming languages are designed in public, implementations are free, and much of the code you write is public. Coding is now a community activity. For a new language to be successful, it must first become an entire ecosystem, including extensive standard libraries, a build tool, a test framework, a code formatting style and checking tool, and now even a package manager and official repository for add-on libraries. This has become the standard checklist for considering a new language. But that's still not enough. We now expect a language to have a code of conduct and a friendly community, and that requires leaders to develop a culture of kindness. In this presentation, I will look at a number of programming languages and the ways that they have succeeded or failed in creating ecosystems.`,
        video: "https://youtu.be/d25z-wO1zzs",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKMjU2NzQtNTdYRkU"
    },
    {
        topic: "Java in production for Data Mining Research projects",
        date: "Apr 2015",
        speakers: [alexey_zinoviev],
        abstract: `Java is often criticized for hard parsing CSV datasets, poor matrix and vectors manipulations. This makes it hard to easy and efficiently implement certain types of machine learning algorithms. In many cases data scientists choose R or Python languages for modeling and problem solution and you as a Java developer should rewrite R algorithms in Java or integrate many small Python scripts in Java application. <br/> But why so many highload tools like Cassandra, Hadoop, Giraph, Spark are written in Java or executed on JVM? What the secret of successful implementation and running? Maybe we should forget old manufacturing approach of dividing on developers and research engineers in production projects? <br/> During the report, we will discuss how to build full Java-stack Data Mining application, deploy it, make charts, integrate with databases, how to improve performance with JVM tuning and etc. <br/> Attendees of my talk will become familiar with the development and deploy of an research Java projects, Hadoop/Spark basics and will get useful tips about possible integration ways.`,
        video: "https://youtu.be/l_9LdIJovFo",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKOHg3S3Z5QmdZeWs"
    },
    {
        topic: "Spring The Ripper",
        date: "Apr 2015",
        speakers: [evgeny_borisov],
        abstract: `Why should we know about Spring internals? It works! So use it and enjoy! However, as always, in order to use Spring in most efficient way, you must know, what is under the fork. Only in case you really understand its internals you will be able to use all power of Spring. You will be able to customize this framework according to challenges of your project, to achieve best performance and solve any problem without applying to Spring-support center. <br/> <br/> During the talk following topics will be covered: <ul> <li>How does Spring impact the performance of your application?</li> <li>What are the phases of Spring lifecycle?</li> <li>What is ApplicationContext structure?</li> <li>“You can’t do it with Spring!” – or maybe you can?</li> </ul>`,
        video: "https://youtu.be/peb8zHaxq2A",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKd1ZwU0VCUmJKMTA"
    },
    {
        topic: "Spring Puzzlers. The Greatest Hits",
        date: "Apr 2015",
        speakers: [evgeny_borisov, baruch_sadogursky],
        abstract: `Everyone knows, that Spring is one of the most powerful and useful frameworks for Java. So how deep are you familiar with it? <br/>Level 1 – You know how to use Spring basic without understanding how it actually works under the hood. <br/>Level 2 – You understand Spring internals, so you can customize it in accordance with the needs of your project. <br/> We offer you an upgrade to Level 3 – to obtain knowledge of very particular but important details about Spring. This session includes many intricate riddles about Spring, which were gathered from real production java projects. Solving them will help you to acquire very important knowledge about Spring and will protect you from different mystical bugs.`,
        video: "https://youtu.be/BcW8Bih27JQ",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKZlcyeXdXQTZvNUk"
    },
    {
        topic: "TDD for database related code, how is it possible?",
        date: "Apr 2015",
        speakers: [mikalai_alimenkou],
        abstract: `TDD style proved itself as very reliable and quick way of business tasks solving with code. But most of examples on trainings and in the internet show how to apply TDD to simple input/output code or interface based dependencies with mocking techniques. What about other areas of application development like database related code? Could it be developed with TDD style? What does TDD bring to developer? I will try to answer these questions in my talk and show on practical examples how helpful TDD is for database code, how it reduces risks and opens the door for refactoring techniques. As bonus NoSQL solutions will be covered as well, that should make this topic popular even more!`,
        video: "https://youtu.be/fU1D-2ZIs20",
        presentation: "http://www.slideshare.net/alimenkou/tdd-for-db-integration",
        code: "https://github.com/xpinjection/tdd-sample"
    },
    {
        topic: "Distributed Rate Limiter. Generic Software Engineering Practices",
        date: "Apr 2015",
        speakers: [uladzimir_liashkevich],
        abstract: `Online resources oftentimes have to deal with surge of incoming traffic. It can be caused by an increased demand of the service it provides. Slashdot effect or DDoS attack can lead to that as well. <br/> In this talk, we will consider request rate limiting pattern that one can employ in their online request processing systems to provide the initial line of defense. Several tools are already available to Java developers that can work in simple scenarios. Additional measures are required in case a distributed service accesses an external resource that has a limited capacity to handle requests. <br/> The talk also briefly covers broader topics, of how to come up with meaningful software engineering practices. This can have direct impact on developers’ day-to-day effectiveness. Besides developers, the talk can be especially interesting to team leaders and technical managers.`,
        video: "https://youtu.be/r19H-Gast7g",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKMzhMRHhrRW96Z0k"
    },
    {
        topic: "Java byte code in practice",
        date: "Apr 2015",
        speakers: [rafael_winterhalter],
        abstract: `At first glance, Java byte code can appear to be some low level magic that is both hard to understand and effectively irrelevant to application developers. However, neither is true. With only little practice, Java byte code becomes easy to read and can give true insights into the functioning of a Java program. In this talk, we will cast light on compiled Java code and its interplay with the Java virtual machine. In the process, we will look into the evolution of byte code over the recent major releases with features such as dynamic method invocation which is the basis to Java 8 lambda expressions. Finally, we will learn about tools for the run time generation of Java classes and how these tools are used to build modern frameworks and libraries. Among those tools, I present <a href="http://bytebuddy.net">Byte Buddy</a>, an open source tool of my own efforts and an attempt to considerably simplify run time code generation in Java.`,
        video: "https://youtu.be/DoULLSpEnU4",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKTkc2dmlZS3J6cmc"
    },
    {
        topic: `How "final" is final?`,
        date: "Apr 2015",
        speakers: [volker_simonis],
        abstract: `Altough the concept of "final" fields is quite simple, its implementation in Java can lead to surprising effects. First of all, the Java VM and Java language have a slightly different understanding of "final". Second (and unfortunately) declaring a field as final doesn't mean that the VM or the programmer can really rely on its immutability. <br/> This talk will show the differnt aspects of "finality" and their impact on the Java compiler and the Java VM. It will demonstrate how finality can be circumvented in Java with the help of reflection or sun.misc.Unsafe. And finally it will discuss the impacts this has on the optimzations done by the JIT compiler.`,
        video: "https://youtu.be/7ZMgs6GKZU8",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKVnEwWEJPTjNyWkU"
    },
    {
        topic: "Atomics, CAS, and Nonblocking Algorithms",
        date: "Apr 2015",
        speakers: [alexey_fyodorov],
        abstract: `This updated talk will dive you into disadvantages of locking, CAS operations, Java atomic variable classes and a couple of nonblocking algorithms: nonblocking stack and nonblocking queue. We will also talk about ABA problem. The talk is based on JCIP (§15) and TAoMP (§§ 5, 7, 10, 11). It will be interesting for Java programmers who have heard about CAS and lock-free, but who have no experience in writing non-blocking code.`,
        video: "https://youtu.be/4mxYC2e6ALs",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKUy0wTWFFVlpkcFU"
    },
    {
        topic: "An introduction to JVM performance",
        date: "Apr 2015",
        speakers: [rafael_winterhalter],
        abstract: `Writing software for a virtual machine allows developers to forget about machine code assembly, interrupts and processor caches. This makes Java a convenient language, but all too many developers see the JVM as a black box and are often unsure of how to optimize their code for performance. This unfortunately adds credence to the myth that Java is always outperformed by native languages. In this talk we'll take a peek at the inner workings of the HotSpot Virtual Machine, its Just-In-Time Compiler and the interplay with a computer's hardware. From this, we will understand the more common optimizations that a virtual machine applies to be better equipped to improve and to reason about a Java program's performance, and how to correctly measure runtime!`,
        video: "https://youtu.be/wL3KrSGuZW0",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKdGFLMi00cDZrc3c"
    },
    {
        topic: "Do we need Unsafe in Java?",
        date: "Apr 2015",
        speakers: [andrei_pangin],
        abstract: `Java platform is highly appreciated for its security features: type safety, bounds checking, access control, automatic memory management, etc. The Virtual Machine provides a managed environment to guard applications from typical run-time problems. Today, however, more and more developers opt to break the barrier and escape from JVM sandbox. There is hardly a Senior Java developer who has never heard of sun.misc.Unsafe. Though it has always been a private API intended for JDK internal use only, the popularity of Unsafe has grown too fast, and now it is used in many open-source projects. <a href="http://ok.ru">OK.RU</a> is not an exception: its software also heavily relies on Unsafe APIs. <br/>During this session we'll try to understand what is so attractive about Unsafe. Why do people keep using it regardless the warnings of removal from future JDK releases? Are there any safe alternatives to private API or is it absolutely vital? We will review the typical cases when Java developers prefer to go unsafe and discuss major benefits and the drawbacks of it. The report will be supported by the real examples from <a href="http://ok.ru">OK.RU</a> experience.`,
        video: "https://youtu.be/65XX8Mrnf_c",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKblJKMXkwRWpxZlU"
    },
    {
        topic: "The Epic Groovy Puzzlers. Directors' Cut",
        date: "Apr 2015",
        speakers: [baruch_sadogursky, evgeny_borisov],
        abstract: `Remember the epic Java Puzzlers? Here’s the Groovy version, and we have some neat ones! We gathered the most puzzling, challenging and funny ones from the first two seasons of the Groovy Puzzlers running across the world and contributions from the truly Groovy Senseis make this talk an unforgettable journey to Groovy's O_O. <br/> In this talk you’ll have the expected dose of fun and enlightenment hearing about mistakes and failures, great and small, in a real hardcore Groovy development.`,
        video: "https://youtu.be/LVFovqb1k0s",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKeVdnbC1FWmdYY0E"
    },
    {
        topic: "Scala perfomance for those who doubt",
        date: "Apr 2015",
        speakers: [roman_grebennikov],
        abstract: `Scala language has a lot of nifty features like pattern matching, recursion, collections with lambdas and other things from functional programming world. And all these features are combined together in a way that makes programming happier. <br/> But all these dreams about FP magic can be easily destroyed by the fact, that "when I rewrote all my spaghetti Java code to a Scala one-liner, why did it become three times slower?". Brutal reality hints us that all these modern high-level abstractions may hide monsters inside and a comfort you get by using them has it's own price. And if you develop something more complex than a simple CRUD application and it's even slightly connected with performance, you must clearly understand how do all these "monads" behave. <br/> This talk will tell you about magic performed by scala compiler, will show you a couple of horror stories about scala performance with explanations and solutions: <ul> <li> JMH and how to use it with Scala. </li> <li> What happens when you hit 'compile' button. </li> <li> Pattern-matching, tail recursion and collections under the hood. </li> <li> How HotSpot optimises your code. </li> </ul> Parental advisory: 18+, explicit x86_64 assembly inside.`,
        video: "https://youtu.be/oHtaD5oXPtc",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKY3RXNTJmdE1uQ3c"
    },
    {
        topic: "Streams: reactive? functional? Or: akka- & scalaz- streams side-by-side?",
        date: "Apr 2015",
        speakers: [adam_warski],
        abstract: `Stream data processing is becoming increasingly popular, providing elegant abstractions to solve a large number of everyday problems. Plus it’s at the core of the “reactive” movement! There are two popular libraries for single-node stream processing in the Scala ecosystem: akka-stream and scalaz-stream. <br/> Both libraries share a common design goal, to provide compositionality, but they take different routes to satisfy that requirement. Akka-stream puts an emphasis on implementing the reactive streams standard and is actor-based, while scalaz-stream aims at isolating effects and providing a possibly pure FP library. <br/> During the *live-coding* presentation, we’ll implement a couple of examples using both libraries, introducing their core concepts and highlighting key differences. <br/> It will be really useful for Java developers familiar with Java 8 features to dive deeper into functionl world.`,
        video: "https://youtu.be/pXj5Q8KsXX0",
        code: "https://github.com/adamw/streams-pres"
    },
    {
        topic: "Domain-specific Hotspot Optimization with Scalan",
        date: "Apr 2015",
        speakers: [alexander_slesarenko],
        abstract: `While high-level abstractions greatly simplify program development, they ultimately need to be eliminated to produce high-performance code. <br/>I will present Scalan, a framework which enables compilation of high-level object-oriented-functional code in Scala into high-performance low-level code. <br/>Using simple examples we will look at compilation pipeline of Scalan in action. We start from DSL embedding, then discuss transformation and specialization techniques based on staged evaluation, then generation of efficient imperative code using Lightweight Modular Staging framework and finally performance evaluation and speedups.`,
        video: "https://youtu.be/aTyG1zWypc0",
        presentation: "https://drive.google.com/open?id=0B0eiLAQm-txKLUM4YjdKRlFJTUU"
    },
    {
        topic: "Groovy AST Transformations: Getting practical in an hour",
        date: "Apr 2015",
        speakers: [baruch_sadogursky],
        abstract: `​If you​ know Groovy, you​ probably know ​it has very powerful AST transformations. You might although think that writing your own AST transformations is something complicated, and takes deep knowledge of academical compilers, abstract syntax tree and other neat stuff. Although for deep understanding of some advanced AST concepts that might be true, Groovy makes it super-easy to get started with creating your own magic with AST Transformations. Come to this talk to hear (but mostly see) how AST transformations work, and what it takes to write your own (hint: it won't be complicated).`,
        video: "https://youtu.be/1va4bdsfJ00",
        code: "https://github.com/jbaruch/ast-talk/tree/jet-2105"
    }
];

sessions.forEach((session, idx) => {
    session.id = idx;
    session.speakers.forEach(speaker => {
        speaker.sessions = speaker.sessions || [];
        speaker.sessions.push(session);
    })
});

const speakers = sessions
    .reduce((previousValue, currentValue) => {
        currentValue.speakers.forEach(it => {
            if (previousValue.indexOf(it) < 0) {
                previousValue.push(it)
            }
        });
        return previousValue
    }, [])
    .map((it, idx) => {
        it.id = idx;
        return it;
    })
    .map(it => renderSpeaker(it)).join("");

function renderSpeaker(speaker: Speaker): string {
    return `
<div class="speaker" id="speaker-${speaker.id}">
    <h3>${speaker.name}</h3>
    <p>Sessions: ${speaker.sessions.map(it => `<a href="#session-${it.id}">${it.topic}</a>`).join(", ")}</p>
    <img src="${baseImgPath}${speaker.image}"/>
    <p>${speaker.bio}</p>
</div>
`;
}

function renderSession(session: Session): string {
    return `
<div id="session-${session.id}">
    <h3>${session.topic}</h3>
    <p>Speakers: ${session.speakers.map(it => `<a href="#speaker-${it.id}">${it.name}</a>`).join(", ")}</p>
    <p>${session.abstract}</p>
    <p>${[
        meta("code", session),
        meta("video", session),
        meta("presentation", session)
    ].filter(it => it).join(", ")}</p>
</div>
`;
}

function meta(name: string, session: Session): string {
    if (session[name]) {
        return `<a href="${session[name]}">${name}</a>`;
    }
}

function renderPage(sessions: string, speakers: string) {
    return `---
date: "2017-12-13T21:02:04+03:00"
title: "JetConf"
---

Архив докладов с сайта <a href="http://jetconf.by/">jetconf.by</a>.
Belarus Java User Group не имеет никакого отношения к JetConf.

<h2>Sessions</h2>
${sessions}

<h2>Speakers</h2>
${speakers}

<h2>JetConf.by в социальных сетях:</h2>
<ul>
  <li><a href="https://vk.com/jetconf">vk</a></li>
  <li><a href="https://facebook.com/jetconf">facebook</a></li>
  <li><a href="https://twitter.com/jetconf">twitter</a></li>
  <li><a href="https://www.youtube.com/channel/UC-SvUjowAv-JHIiaIT9S0cg">youtube</a></li>
  <li><a href="https://gitter.im/jetconf/chat">gitter</a></li>
</ul>

<style>
  .speaker img {
    width: 200px;
    border-radius: 50%;
  }
</style>
`;
}

interface Session {
    id?: number;
    readonly topic: string;
    readonly date: string;
    readonly speakers: Speaker[]
    readonly abstract: string;
    readonly video?: string;
    readonly presentation?: string;
    readonly code?: string;
}

interface Speaker {
    id?: number;
    sessions?: Session[];
    readonly name: string;
    readonly bio: string;
    readonly image: string;
}

const page = renderPage(
    sessions.map(it => renderSession(it)).join(""),
    speakers
);

fs.writeFileSync("./content/fixed/jetconf.html", page, "UTF-8");
