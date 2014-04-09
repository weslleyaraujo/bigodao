require 'Processes'

describe Processes do

    it 'save session process' do
        session = Processes.new()
        session.setProcess(10)
        session.getProcess().should eql([10])
    end

    it 'save session process' do
        session = Processes.new()
        session.setProcess(25)
        session.clear
        session.setProcess(500)
        session.getProcess().should eql([25, 500])
    end

end
