import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Heart } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

export function WeddingInvitation() {
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'yes',
    guests: '1'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1773370812795-fe6f7b6e85f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGZsb3dlcnMlMjB3aGl0ZXxlbnwxfHx8fDE3NzUwMzQ3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Wedding flowers"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/80" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-rose-400 fill-rose-400" />
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-gray-800 mb-4"
          >
            원국 & 지민
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="space-y-2"
          >
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              결혼합니다
            </p>
            <p className="text-lg text-gray-500">
              저희 두 사람이 사랑으로 하나 되는 날<br />
              함께 자리해 주시어 축복해 주시면 감사하겠습니다
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-12"
          >
            <div className="inline-block px-8 py-3 border-t border-b border-gray-300">
              <p className="text-gray-700">2026년 6월 14일 일요일 오후 2시</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="flex justify-center py-12">
        <div className="flex items-center gap-4">
          <div className="w-20 h-px bg-gray-300" />
          <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
          <div className="w-20 h-px bg-gray-300" />
        </div>
      </div>

      {/* Message Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto px-4 py-12 text-center"
      >
        <p className="text-gray-700 leading-relaxed text-lg">
          평생을 함께 할 사람을 만났습니다.<br />
          서로 아껴주고 존중하며<br />
          사랑이 가득한 가정을 이루고자 합니다.<br />
          <br />
          저희의 새로운 시작을 함께 해주시면<br />
          큰 기쁨으로 간직하겠습니다.
        </p>
      </motion.div>

      {/* Couple Info */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-2 gap-8 text-center">
          <div>
            <p className="text-sm text-gray-500 mb-2">신랑</p>
            <p className="text-2xl font-serif text-gray-800 mb-4">박원국</p>
            <div className="text-sm text-gray-600 space-y-1">
              <p>박준호 · 최은영의 장남</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">신부</p>
            <p className="text-2xl font-serif text-gray-800 mb-4">김지민</p>
            <div className="text-sm text-gray-600 space-y-1">
              <p>김동현 · 이미숙의 장녀</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Venue Image Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <img 
          src="https://images.unsplash.com/photo-1759954644796-0ed43f06715b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHdlZGRpbmclMjBjZXJlbW9ueSUyMHZlbnVlfGVufDF8fHx8MTc3NTAzNDc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Wedding venue"
          className="w-full rounded-lg shadow-2xl"
        />
      </motion.div>

      {/* Event Details */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto px-4 py-12"
      >
        <Card className="p-8 shadow-lg bg-white/80 backdrop-blur">
          <h2 className="text-3xl font-serif text-center mb-8 text-gray-800">예식 안내</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-rose-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 mb-1">날짜</p>
                <p className="text-gray-600">2026년 6월 14일 일요일</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-rose-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 mb-1">시간</p>
                <p className="text-gray-600">오후 2시</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-rose-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 mb-1">장소</p>
                <p className="text-gray-600">그랜드 웨딩홀 2층 그레이스홀</p>
                <p className="text-sm text-gray-500 mt-1">서울특별시 강남구 테헤란로 123</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Button 
              className="w-full bg-rose-400 hover:bg-rose-500 text-white"
              onClick={() => window.open('https://maps.google.com', '_blank')}
            >
              <MapPin className="w-4 h-4 mr-2" />
              오시는 길 안내
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* RSVP Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto px-4 py-12"
      >
        <Card className="p-8 shadow-lg bg-white/80 backdrop-blur">
          <h2 className="text-3xl font-serif text-center mb-8 text-gray-800">참석 여부</h2>
          
          {!rsvpSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 mb-2 block">성함</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="이름을 입력해주세요"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <Label className="text-gray-700 mb-3 block">참석 여부</Label>
                <RadioGroup
                  value={formData.attendance}
                  onValueChange={(value) => setFormData({ ...formData, attendance: value })}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="font-normal cursor-pointer">참석</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="font-normal cursor-pointer">불참</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.attendance === 'yes' && (
                <div>
                  <Label htmlFor="guests" className="text-gray-700 mb-2 block">참석 인원</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full"
                  />
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-rose-400 hover:bg-rose-500 text-white"
              >
                참석 여부 전달하기
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <Heart className="w-16 h-16 mx-auto mb-4 text-rose-400 fill-rose-400" />
              <h3 className="text-2xl font-serif text-gray-800 mb-2">감사합니다!</h3>
              <p className="text-gray-600">
                {formData.attendance === 'yes' 
                  ? '소중한 시간 내어 참석해 주셔서 감사합니다.' 
                  : '마음만이라도 함께 해주셔서 감사합니다.'}
              </p>
            </motion.div>
          )}
        </Card>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center py-16 px-4"
      >
        <Heart className="w-8 h-8 mx-auto mb-4 text-rose-400 fill-rose-400" />
        <p className="text-gray-600 mb-2">원국 ♥ 지민</p>
        <p className="text-sm text-gray-500">2026. 06. 14</p>
      </motion.div>
    </div>
  );
}