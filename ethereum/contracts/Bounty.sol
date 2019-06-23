pragma solidity ^0.4.25;

contract BountyHubFactory {
    address[] public deployedHubs;

    function createBountyHub(string accessPoint) public payable {
        address newBountyHub = new BountyHub(accessPoint,msg.sender);
        deployedHubs.push(newBountyHub);
    }

    function getDeployedHubs() public view returns (address[]) {
        return deployedHubs;
    }
}

contract BountyHub {
    struct BugHunt {
        address secret;
        uint reward;
        bool complete;
        string solution;
    }

    BugHunt[] public hunts;
    address public manager;
    string public accessPoint;
    string public status = "Idle";

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor(string url, address creator) public {
        manager = creator;
        accessPoint = url;
    }

    function fundHub() public payable {
    }

    function createHunt(address secret, uint reward) public restricted {
        BugHunt memory newHunt = BugHunt({
           secret: secret,
           reward: reward,
           complete: false,
           solution: ''
        });

        hunts.push(newHunt);
        status = "Hunt Created!";
    }

    function submitSolution(uint index, address secret, string solution) public returns(string) {
        BugHunt storage hunt = hunts[index];

        if(hunt.complete == true)
        {
            status = "Hunt already solved!";
        } else if(secret != hunt.secret){
            status = 'Invalid secret';
        } else {
            hunt.solution = solution;
            hunt.complete = true;
            msg.sender.transfer(hunt.reward);
            status = "Reward Sent!";
        }
    }

    function getSummary() public view returns (
      uint, uint, string, address, string
      ) {
        return (
          address(this).balance,
          hunts.length,
          accessPoint,
          manager,
          status
        );
    }

}
