process.env.NODE_ENV = "test";
import chai from "chai";
import app from "../../server.js";
import chaiHttp from "chai-http";
import Player from "../models/player.model.js";
chai.should();

chai.use(chaiHttp);
const player = new Player({
  name: "John",
  age: 20,
  position: "Forward",
});

after(() => process.exit());

// Write tests for the endpoint GET /players
describe("GET /api/players", () => {
  beforeEach((done) => {
    //Before each test we empty the database
    Player.deleteMany({}, (err) => {
      // Save player in the database
      player.save();
      done();
    });
  });

  it("it should GET all the players", (done) => {
    chai
      .request(app)
      .get("/api/players")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(1);
        // Check that the player name is John
        res.body[0].name.should.be.eql("John");
        // Check that the player age is 20
        res.body[0].age.should.be.eql(20);
        // Check that the player position is Forward
        res.body[0].position.should.be.eql("Forward");
        done();
      });
  });
});

// Write tests for the endpoint POST /players
describe("POST /api/players", function () {
  // Before each test we empty the players in database
  beforeEach((done) => {
    Player.deleteMany({}, (err) => {
      done();
    });
  });

  it("should create a new player", (done) => {
    // Create a player using post request
    chai
      .request(app)
      .post("/api/players")
      .send(player)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("name").eql("John");
        res.body.should.have.property("age").eql(20);
        res.body.should.have.property("position").eql("Forward");
        done();
      });
  });
});

// Write tests for the endpoint GET api/players/:id

// Write tests for the endpoint PUT /api/players/:id

// Write tests for the endpoint DELETE /api/players/:id
