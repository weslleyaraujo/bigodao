require 'Subtitle'

describe Subtitle do

    before :all do
        @subtitle = Subtitle.new()
    end


    it 'get subtitle by IMD id' do
        @subtitle.getSubtitle('tt1013753').should eql(true)
        File.exist?('tt1013753.srt').should eql(true)
        system 'rm tt1013753.srt'
    end

end